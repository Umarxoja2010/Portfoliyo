import React from 'react';
import "../styles/Skil.css";
import { 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiFigma, 
  SiBootstrap, 
  SiGit, 
  SiGithub, 
  SiJavascript, 
  SiTailwindcss, 
  SiRedux,
  SiNextdotjs // ✅ Next.js ikonkasi
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> }, // ✅ Next.js qo‘shildi
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'Sass', icon: <SiSass /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  {  name:  'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Redux', icon: <SiRedux /> },
];

const Skill = () => {
  return (
    <section className="skil-section" id="skills">
      <h2>My Skill</h2>
      <div className="skil-grid">
        {skills.map(({name, icon}) => (
          <div key={name} className="skil-item" title={name}>
            <div className="skil-icon">{icon}</div>
            <div className="skil-name">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
