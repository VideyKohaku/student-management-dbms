import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoursesEnrolled, fetchAllCourses, setCurrentCourseDetail, fetchStudentFromCourseWithGrade  } from '../redux/studentSlice/actions';
import store from '../redux/store';

const StudentDetail = ({ toggleForm }) => {
    const currentStudent = useSelector(state => state.students.currentStudent)
    const coursesEnrolled = useSelector(state => state.students.courseEnrolled)
    // const allCourses = useSelector(state => state.courses.courses)
    const dispatch = useDispatch()
    // const [isAddVisible, setIsAddVisible] = useState(false)

    useEffect(() => {
        // console.log('currentStudent:', currentStudent)
        dispatch(fetchCoursesEnrolled(currentStudent.student_id))
        dispatch(fetchAllCourses())
    }, [dispatch, currentStudent])


    const handleEnroll = () => {
        toggleForm('Open add')
    }


    const handleCourseDetail = (course_id) => {
        console.log('course:', course_id)
        dispatch(setCurrentCourseDetail(course_id))
        dispatch(fetchStudentFromCourseWithGrade(course_id, 0, 10))
        console.log(store.getState())
        // dispatch(setCurrentCourseAction(course))
        toggleForm('Open course detail')
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <button className='button' onClick={() => toggleForm('Close student detail')}>Back to Student List</button>
                <button className='button' onClick={handleEnroll}>Add course</button>
            </div>
            <h2>Student Name: {`${currentStudent.first_name}  ${currentStudent.last_name}`}</h2>
            <h3>Email: {currentStudent.email}</h3>

            <table>
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coursesEnrolled && coursesEnrolled.map((enrollment, index) => (
                        <tr key={index}>
                            <td>{enrollment.course_id}</td>
                            <td>{enrollment.name}</td>
                            <td>{enrollment.credits}</td>
                            <td>{enrollment.grade}</td>
                            <td>
                                <button className='button' onClick={() => handleCourseDetail(enrollment.course_id)}>View Course Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDetail;
