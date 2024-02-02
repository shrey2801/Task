// EmployeeForm.js
import React, { useState } from 'react';
import './Emp.reg.css'; // Import the CSS file

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    joiningDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Submitted data:', employeeData);
  };

  return (
    <div className="form-container">
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Joining Date:
          <input
            type="date"
            name="joiningDate"
            value={employeeData.joiningDate}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
