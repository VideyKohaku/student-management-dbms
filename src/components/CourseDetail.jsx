import React, { useState } from 'react';

const CourseDetail = ({toggleForm}) => {
    const courseName = 'Course Name';
    const credits = 3;
    const studentList = [
        { lastName: 'Doe', firstName: 'John', email: 'john.doe@example.com', grade: 90 },
        { lastName: 'Smith', firstName: 'Jane', email: 'jane.smith@example.com', grade: 85 },
        { lastName: 'Johnson', firstName: 'Michael', email: 'michael.johnson@example.com', grade: 95 },
    ];

    const [minGrade, setMinGrade] = useState('');
    const [maxGrade, setMaxGrade] = useState('');

    const handleFilterSubmit = () => {
        // Perform filtering logic based on minGrade and maxGrade values
        // Update the filtered student list accordingly
    };

    return (
        <div>
            <h2>{courseName}</h2>
            <p>Credits: {credits}</p>
            <div>
                <label htmlFor="minGrade">Min Grade:</label>
                <input
                    type="number"
                    className="minGrade"
                    value={minGrade}
                    onChange={(e) => setMinGrade(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maxGrade">Max Grade:</label>
                <input
                    type="number"
                    className="maxGrade"
                    value={maxGrade}
                    onChange={(e) => setMaxGrade(e.target.value)}
                />
            </div>
            <button onClick={handleFilterSubmit}>Submit Filter</button>
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
                    {studentList.map((student, index) => (
                        <tr key={index}>
                            <td>{student.lastName}</td>
                            <td>{student.firstName}</td>
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
