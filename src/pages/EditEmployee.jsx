import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";

import {
  getEmployee,
  updateEmployee
} from "../services/employeeService";

import EmployeeForm from "../components/EmployeeForm";

function EditEmployee() {

  const { employeeId } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {

    loadEmployee();

  }, [employeeId]);

  const loadEmployee = async () => {

    try {

      setLoading(true);
      setError("");

      const response =
        await getEmployee(employeeId);

      setEmployee(response.data);

    } catch (error) {

      console.error(error);

      setError(
        "Unable to load employee."
      );

    } finally {

      setLoading(false);
    }
  };

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

      await updateEmployee(
        employeeId,
        employee
      );

      navigate("/");

    } catch (error) {

      console.error(error);

      setError(
        "Unable to update employee. Please try again."
      );

    } finally {

      setSubmitting(false);
    }
  };

  if (loading) {

    return (
      <div className="page-container">
        <div className="loading">
          Loading employee...
        </div>
      </div>
    );
  }

  if (!employee) {

    return (
      <div className="page-container">

        <div className="error-message">
          {error || "Employee not found."}
        </div>

        <button onClick={() => navigate("/")}>
          Back to Dashboard
        </button>

      </div>
    );
  }

  return (
    <div className="page-container">

      <h1>Edit Employee</h1>

      <EmployeeForm
        employee={employee}
        isEditMode={true}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/")}
        submitting={submitting}
        error={error}
      />

    </div>
  );
}

export default EditEmployee;