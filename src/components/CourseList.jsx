import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCourseDetail } from "../redux/studentSlice/actions";

const CourseList = ({ toggleForm }) => {
  const courses = useSelector((state) => state.students.courses);
  const dispatch = useDispatch();

  const handleViewCourseDetail = (course_id) => {
    console.log("course:", course_id);
    dispatch(setCurrentCourseDetail(course_id));
    // console.log(store.getState())
    // dispatch(setCurrentCourseAction(course))
    toggleForm("Open course detail");
  };

  return (
    <section className="courseList card">
      <div className="card-header">
        <h2>Course List</h2>
        <div className="action-buttons">
          <button
            className="button"
            onClick={() => toggleForm("Close course list")}
          >
            Close Courses
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Credits</th>
            <th>Name</th>
            <th>Enrollment Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.credits}</td>
                <td>{course.name}</td>
                <td>{course.enrollment_count}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => handleViewCourseDetail(course.course_id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default CourseList;
