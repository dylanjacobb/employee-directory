import React from 'react';
import fetchEmployee from '../../utils/API';

const EmployeeTable = () => {
    return (
        <table class='table'>
            <thead class='thead-dark'>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Cell</th>
                </tr>
            </thead>
            <tbody>
                {fetchEmployee.map(employee => {
                    <tr>
                        <td>{<img height='30px'  src={employee.picture.medium} alt='employee'/>}</td>
                        <td>{employee.name.first + '' + employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.age}</td>
                        <td>{employee.cell}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default EmployeeTable;