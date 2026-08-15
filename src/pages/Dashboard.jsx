import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getEmployees,
  deleteEmployee
} from "../services/employeeService";

import EmployeeTable from "../components/EmployeeTable";

function Dashboard() {

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await getEmployees();

      setEmployees(response.data);

    } catch (error) {

      console.error(error);

      setError(
        "Unable to load employees. Please try again."
      );

    } finally {

      setLoading(false);
    }
  };

  const handleDelete = async (employeeId) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    try {

      setError("");

      await deleteEmployee(employeeId);

      setEmployees(
        employees.filter(
          employee =>
            employee.employee_id !== employeeId
        )
      );

      setSuccessMessage(
        "Employee deleted successfully."
      );

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

    } catch (error) {

      console.error(error);

      setError(
        "Unable to delete employee. Please try again."
      );
    }
  };

  const handleEdit = (employeeId) => {

    navigate(
      `/edit-employee/${employeeId}`
    );
  };

  return (
    <div className="page-container">

      <div className="page-header">

        <h1>Employees</h1>

        <button
          onClick={() => navigate("/add-employee")}
        >
          Add Employee
        </button>

      </div>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {loading ? (

        <div className="loading">
          Loading employees...
        </div>

      ) : (

        <EmployeeTable
          employees={employees}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      )}

    </div>
  );
}

export default Dashboard;