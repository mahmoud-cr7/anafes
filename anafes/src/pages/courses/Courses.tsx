import React, { useState, useEffect } from "react";
import "./Courses.css";
import { Atom } from "react-loading-indicators";
import { Course } from "../../types/Types";
import { fetchCourses } from "../../api/CoursesApi";

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const getCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const courseList = await fetchCourses();
      setCourses(courseList);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred."); 
      }
    } finally {
      setLoading(false);
    }
  };

  getCourses();
}, []);

  return (
    <div>
      {loading && (
        <div className="loading-container">
          <div className="loading">
            <Atom
              color="#7e57c2"
              size="large"
              text="Loading..."
              textColor="#7e57c2"
            />
          </div>
        </div>
      )}

      {error && <p>{error}</p>}
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={`/src/assets/icons/${course.icon}`} alt={course.name} />
            <h3>{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
