import React, { useState } from 'react';

const GradeAccordion = ({ onClick, expandedGrade }) => {
  const grades = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="grade-container">
      {grades.map((grade) => (
        <div key={grade} className="grade">
          <h3 onClick={() => onClick(grade)} id={`grade-${grade}`}>
            Grade {grade}
          </h3>
          {expandedGrade === grade && (
            <ul>
              <li>
                <Link to={`/grade-${grade}/learning-resources`}>Mathematics</Link>
              </li>
              <li>
                <Link to={`/grade-${grade}/subjects`}>English</Link>
              </li>
              <li>z
                <Link to={`/grade-${grade}/activities`}>Sciences</Link>
              </li>
              <li>
                <Link to={`/grade-${grade}/assessments`}>Religious Education</Link>
              </li>
              <li>
                <Link to={`/grade-${grade}/recordings`}>Geography</Link>
              </li>
              <li>
                <Link to={`/grade-${grade}/recordings`}>Civics</Link>
              </li>
              <li>
                <Link to={`/grade-${grade}/recordings`}>English</Link>
              </li>
              <li>
                <Link to={`/grade-${grade}/recordings`}>Communication studies</Link>
              </li>
              <li>
                <Link to={`/grade-