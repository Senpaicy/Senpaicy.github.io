import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  isStrong?: boolean;
}

interface SkillHexagonProps {
  skills: Skill[];
}

const RadarChart = ({ skills }: { skills: Skill[] }) => {
  const size = 450; // Increased size for better spacing
  const center = size / 2;
  const maxRadius = 150; // Slightly smaller to make room for labels
  const levels = 5; // 20, 40, 60, 80, 100
  const numSkills = skills.length;
  
  // Calculate points for each skill level on the radar
  const getPoint = (skillIndex: number, level: number) => {
    const angle = (skillIndex * 2 * Math.PI) / numSkills - Math.PI / 2; // Start from top
    const radius = (level / 100) * maxRadius;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, angle };
  };

  // Calculate label positions (further outside the chart)
  const getLabelPoint = (skillIndex: number) => {
    const angle = (skillIndex * 2 * Math.PI) / numSkills - Math.PI / 2;
    const radius = maxRadius + 45; // Increased distance from chart
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, angle };
  };

  // Generate concentric hexagon paths for grid lines
  const getHexagonPath = (levelRadius: number) => {
    const points = [];
    for (let i = 0; i < numSkills; i++) {
      const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
      const x = center + levelRadius * Math.cos(angle);
      const y = center + levelRadius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')} Z`;
  };

  // Generate the filled skill polygon
  const getSkillPolygon = () => {
    const points = skills.map((skill, index) => {
      const point = getPoint(index, skill.level);
      return `${point.x},${point.y}`;
    });
    return `M ${points.join(' L ')} Z`;
  };

  // Generate grid lines from center to each skill point
  const getGridLines = () => {
    return skills.map((_, index) => {
      const outerPoint = getPoint(index, 100);
      return (
        <line
          key={index}
          x1={center}
          y1={center}
          x2={outerPoint.x}
          y2={outerPoint.y}
          stroke="rgba(139, 90, 60, 0.2)"
          strokeWidth="1"
        />
      );
    });
  };

  return (
    <div className="flex justify-center">
      <svg width={size} height={size} className="drop-shadow-lg">
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={maxRadius + 35}
          fill="rgba(245, 241, 232, 0.4)"
          stroke="none"
        />
        
        {/* Concentric grid levels */}
        {Array.from({ length: levels }, (_, i) => {
          const levelRadius = ((i + 1) / levels) * maxRadius;
          const levelValue = ((i + 1) / levels) * 100;
          return (
            <g key={i}>
              <path
                d={getHexagonPath(levelRadius)}
                fill="none"
                stroke="rgba(139, 90, 60, 0.3)"
                strokeWidth="1.5"
              />
              {/* Level labels - improved positioning and styling */}
              <text
                x={center + levelRadius + 8}
                y={center - 2}
                fontSize="12"
                fontWeight="600"
                fill="rgba(139, 90, 60, 0.8)"
                className="font-mono"
              >
                {levelValue}
              </text>
            </g>
          );
        })}

        {/* Grid lines from center to vertices */}
        {getGridLines()}

        {/* Main skill polygon - filled area */}
        <path
          d={getSkillPolygon()}
          fill="rgba(139, 90, 60, 0.25)"
          stroke="rgba(139, 90, 60, 0.8)"
          strokeWidth="2.5"
          className="drop-shadow-sm"
        />

        {/* Strong skills highlighted polygon */}
        <path
          d={getSkillPolygon()}
          fill="rgba(139, 90, 60, 0.1)"
          stroke="rgba(139, 90, 60, 0.9)"
          strokeWidth="3"
          strokeDasharray="8,4"
          className="animate-pulse"
        />

        {/* Skill points */}
        {skills.map((skill, index) => {
          const point = getPoint(index, skill.level);
          return (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r={skill.isStrong ? 7 : 5}
                fill={skill.isStrong ? "rgba(139, 90, 60, 1)" : "rgba(139, 90, 60, 0.8)"}
                stroke="white"
                strokeWidth="3"
                className={skill.isStrong ? "animate-pulse" : ""}
              />
              {skill.isStrong && (
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={12}
                  fill="none"
                  stroke="rgba(139, 90, 60, 0.5)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  className="animate-spin"
                  style={{ animationDuration: '3s' }}
                />
              )}
            </g>
          );
        })}

        {/* Skill labels - Much improved readability */}
        {skills.map((skill, index) => {
          const labelPoint = getLabelPoint(index);
          const skillNameWidth = skill.name.length * 8; // Better width calculation
          const labelHeight = 28; // Taller background for better readability
          
          return (
            <g key={`label-${index}`}>
              {/* Enhanced label background with shadow effect */}
              <rect
                x={labelPoint.x - skillNameWidth / 2 - 6}
                y={labelPoint.y - 18}
                width={skillNameWidth + 12}
                height={labelHeight}
                rx="14"
                fill={skill.isStrong ? "rgba(139, 90, 60, 0.95)" : "rgba(255, 255, 255, 0.95)"}
                stroke={skill.isStrong ? "rgba(139, 90, 60, 1)" : "rgba(139, 90, 60, 0.6)"}
                strokeWidth="2"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
              />
              
              {/* Skill name - larger and more readable */}
              <text
                x={labelPoint.x}
                y={labelPoint.y - 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight={skill.isStrong ? "bold" : "600"}
                fill={skill.isStrong ? "white" : "rgba(58, 45, 38, 0.9)"}
                className="pointer-events-none select-none"
              >
                {skill.name}
              </text>
              
              {/* Skill level - larger and more prominent */}
              <text
                x={labelPoint.x}
                y={labelPoint.y + 8}
                textAnchor="middle"
                fontSize="12"
                fill={skill.isStrong ? "rgba(255, 255, 255, 0.9)" : "rgba(139, 90, 60, 0.8)"}
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                {skill.level}%
              </text>
            </g>
          );
        })}

        {/* Center logo/icon - slightly larger */}
        <circle
          cx={center}
          cy={center}
          r="12"
          fill="rgba(139, 90, 60, 0.9)"
          stroke="white"
          strokeWidth="2"
        />
        <text
          x={center}
          y={center + 4}
          textAnchor="middle"
          fontSize="16"
        >
          🐻
        </text>
      </svg>
    </div>
  );
};

export function SkillHexagon({ skills }: SkillHexagonProps) {
  return (
    <div className="p-8">
      <RadarChart skills={skills} />
      
      {/* Enhanced Legend with better readability */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-3 px-4 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105 ${
              skill.isStrong 
                ? 'bg-primary text-primary-foreground shadow-lg border-primary' 
                : 'bg-white text-foreground shadow-md border-primary/30 hover:border-primary/50'
            }`}
          >
            <div 
              className={`w-4 h-4 rounded-full ${
                skill.isStrong ? 'bg-primary-foreground' : 'bg-primary'
              }`}
            />
            <span className="font-medium">{skill.category}</span>
            <span className="text-sm opacity-75">({skill.level}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}