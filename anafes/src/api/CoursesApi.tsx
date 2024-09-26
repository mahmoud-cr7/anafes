// api/courses.ts
import axios from "axios";
import { Course } from "../types/Types";

const API_URL = "https://nafes.app/cv_task/api/course_list.php?userId=2211";

export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.data.status) {
      return response.data.courseList;
    } else {
      throw new Error("Failed to fetch courses.");
    }
  } catch (error) {
    throw new Error("An error occurred while fetching the courses." + error);
  }
};
