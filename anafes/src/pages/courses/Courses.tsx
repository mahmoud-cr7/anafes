import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Courses.css";
import { Atom } from "react-loading-indicators";

interface Course {
  name: string;
  icon: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://nafes.app/cv_task/api/course_list.php?userId=2211",
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.status) {
          setCourses(response.data.courseList);
        } else {
          setError("Failed to fetch courses.");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("An error occurred while fetching the courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {loading && (
        <div>
          <Atom
            color="#7e57c2"
            size="large"
            text="Loading..."
            textColor="#7e57c2"
            style={{
              textAlign: "end",
              marginInline: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          />
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
