import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    fetchStudentFromCourse,
    fetchStudentFromCourseWithGrade
 } from '../redux/studentSlice/actions';

const CourseDetail = ({toggleForm}) => {
    // const currentStudent = useSelector(state => state.students.currentStudent)
    const currentCourse = useSelector(state => state.students.currentCourseDetail)
    const courseStudents = useSelector(state => state.students.courseStudents)
    const [minGrade, setMinGrade] = useState(0)
    const [maxGrade, setMaxGrade] = useState(10)

    const dispatch = useDispatch()

    console.log('render maxGrade:', maxGrade)

    console.log('render minGrade:', minGrade)
    useEffect(() => {
        console.log('currentCourse:', currentCourse)
        dispatch(fetchStudentFromCourse(currentCourse.course_id, 0, 10))
    }, [currentCourse, dispatch])


    useEffect(() => {
        console.log('courseStudents:', courseStudents)
    }, [courseStudents])


    const handleFilterSubmit = () => {
        // Perform filtering logic based on minGrade and maxGrade values
        // Update the filtered student list accordingly
        dispatch(fetchStudentFromCourseWithGrade(currentCourse.course_id, minGrade, maxGrade))

    };

    return (
        <div>
            <button className='button' onClick={() => toggleForm("Open student detail")}>Back to Student</button>
            <h2>Course: {currentCourse.name}</h2>
            <h3>Credits: {currentCourse.credits}</h3>
            <div>
                <label htmlFor="minGrade">Min Grade:</label>
                <input
                    type="number"
                    className="minGrade"
                    defaultValue={minGrade}
                    
                    onChange={(e) => setMinGrade(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maxGrade">Max Grade:</label>
                <input
                    type="number"
                    className="maxGrade"
                    defaultValue={maxGrade}
                    
                    onChange={(e) => setMaxGrade(e.target.value)}
                />
            </div>
            <button className='button' onClick={handleFilterSubmit}>Submit Filter</button>
            <table>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {courseStudents && courseStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.last_name}</td>
                            <td>{student.first_name}</td>
                            <td>{student.email}</td>
                            <td>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseDetail;
