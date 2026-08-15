import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createEmployee } from "../services/employeeService";

import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (event) => {

    const { name, value } = event.target;

    setEmployee(previousEmployee => ({
      ...previousEmployee,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      setSubmitting(true);
      setError("");

      await createEmployee(employee);

      navigate("/");

    } catch (error) {

      console.error(error);

      setError(
        "Unable to create employee. Please check the data and try again."
      );

    } finally {

      setSubmitting(false);
    }
  };

  return (
    <div className="page-container">

      <h1>Add Employee</h1>

      <EmployeeForm
        employee={employee}
        isEditMode={false}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/")}
        submitting={submitting}
        error={error}
      />

    </div>
  );
}

export default AddEmployee;