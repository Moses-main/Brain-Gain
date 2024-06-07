// src/pages/Courses.js
import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => (
  <div>
    <h1>Courses</h1>
    <CourseCard courseName="React Basics" />
    <CourseCard courseName="Advanced React" />
  </div>
);

export default Courses;
