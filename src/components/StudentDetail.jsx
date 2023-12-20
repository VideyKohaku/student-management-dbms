import React from 'react';


const StudentDetail = ({ toggleForm }) => {
    const enrollments = [
        {enrollment_id: 1, course_name: 'Math', grade: 9},
    ]

    const studentName = 'Alex Skirk';

    return (
        <div>
            <button onClick={() => toggleForm('Close student detail')}>Back to Student List</button>
            <h2>Student Name: {studentName}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {enrollments.map((enrollment, index) => (
                        <tr key={index}>
                            <td>{enrollment.course_name}</td>
                            <td>{enrollment.grade}</td>
                            <td>
                                <button className='button' onClick={() => toggleForm('Open course detail')}>View Course Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDetail;
