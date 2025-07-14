import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      
      <div className="skill">
        <h3>Programming</h3>
        <ul>
          <li>C, C++, CSS/SCSS, HTML, JavaScript, Python, React, Vue</li>
        </ul>
      </div>

      <div className="skill">
        <h3>Software</h3>
        <ul>
          <li>Git, GitHub Desktop, Jira, MongoDB, Postman, VS Code, etc.</li>
        </ul>
      </div>

      {/* Optional: Add progress bars or icons to visualize the skills */}
      <div className="skill-bar">
        <p>React</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div className="skill-bar">
        <p>JavaScript</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
