import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface HobbyStats {
  moneyMaking: number;
  intelligence: number;
  healthy: number;
  relaxing: number;
  creativity: number;
}

interface HobbyCardProps {
  name: string;
  type: string;
  level: number;
  stats: HobbyStats;
  description: string;
  image: string;
  imagePosition?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export function HobbyCard({ name, type, level, stats, description, image, imagePosition = 'center', rarity }: HobbyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const rarityColors = {
    common: 'bg-slate-400',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-yellow-500'
  };

  const rarityBorders = {
    common: 'border-slate-400',
    rare: 'border-blue-500',
    epic: 'border-purple-500',
    legendary: 'border-yellow-500'
  };

  const statLabels = {
    moneyMaking: 'Money Making',
    intelligence: 'Intelligence',
    healthy: 'Health',
    relaxing: 'Relaxing',
    creativity: 'Creativity'
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-96 h-[650px] cursor-pointer" onClick={handleCardClick}>
      <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front of Card */}
        <Card className={`absolute inset-0 w-full h-full overflow-hidden border-2 ${rarityBorders[rarity]} bg-gradient-to-b from-card to-muted/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] backface-hidden`}>
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-foreground">{name}</h3>
              <Badge className={`${rarityColors[rarity]} text-white text-xs px-2 py-1`}>
                Lv. {level}
              </Badge>
            </div>
            <Badge variant="outline" className="text-xs">
              {type} Type
            </Badge>
          </div>

          {/* Character Image - Larger */}
          <div className="h-80 overflow-hidden bg-gradient-to-br from-bear-cream to-bear-light-brown relative">
            <div 
              className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
              style={{ 
                backgroundImage: `url(${image})`,
                backgroundPosition: imagePosition
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Stats */}
          <div className="p-4 flex-1">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-primary mb-2">Bear Stats</h4>
              {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-foreground">
                      {statLabels[key as keyof HobbyStats]}
                    </span>
                    <span className="text-xs text-muted-foreground">{value}/100</span>
                  </div>
                  <Progress 
                    value={value} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom border decoration */}
          <div className={`h-2 ${rarityColors[rarity]}`} />
          
          {/* Flip indicator */}
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 rounded-full px-2 py-1">
            💭 Click to flip
          </div>
        </Card>

        {/* Back of Card */}
        <Card className={`absolute inset-0 w-full h-full overflow-hidden border-2 ${rarityBorders[rarity]} bg-gradient-to-b from-card to-muted/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] backface-hidden rotate-y-180`}>
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-foreground">{name}</h3>
              <Badge className={`${rarityColors[rarity]} text-white text-xs px-2 py-1`}>
                Lv. {level}
              </Badge>
            </div>
            <Badge variant="outline" className="text-xs">
              {type} Type
            </Badge>
          </div>

          {/* Character Image - Larger */}
          <div className="h-80 overflow-hidden bg-gradient-to-br from-bear-cream to-bear-light-brown relative">
            <div 
              className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
              style={{ 
                backgroundImage: `url(${image})`,
                backgroundPosition: imagePosition
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Description */}
          <div className="p-6 flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💭</div>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "{description}"
              </p>
            </div>
          </div>

          {/* Bottom border decoration */}
          <div className={`h-2 ${rarityColors[rarity]}`} />
          
          {/* Flip indicator */}
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 rounded-full px-2 py-1">
            📊 Click to flip
          </div>
        </Card>
      </div>
    </div>
  );
}