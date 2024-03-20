import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GradeAccordion from './GradeAccordion';
import TeacherCarousel from './TeacherCarousel';

const Primary = () => {
  const [expandedGrade, setExpandedGrade] = useState(null);

  const handleGradeClick = (grade) => {
    setExpandedGrade(expandedGrade === grade ? null : grade);
  };

  return (
    <div className="primary-page">
      <aside className="sidebar">
        <h2>Useful Links</h2>
        <ul>
          <li>
            <Link to="/olevel">O-Level</Link>
          </li>
          <li>
            <Link to="/advanced">A-Level</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
          <li>
            <Link to="/mentor">Mentor</Link>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/learning-materials">Learning Materials</Link>
          </li>
        </ul>
      </aside>
      <main className="content">
        <h1>Primary Education</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia nunc at erat ultrices, vel faucibus
          nulla rhoncus. Curabitur euismod, nisi et fringilla maximus, nulla eros auctor nulla, vitae dictum tellus erat
          at tellus.
        </p>
        <div className="grades">
          <GradeAccordion onClick={handleGradeClick} expandedGrade={expandedGrade} />
          <div className="teacher-box">
            <TeacherCarousel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Primary;