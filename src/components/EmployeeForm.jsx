function EmployeeForm({
  employee,
  isEditMode,
  onChange,
  onSubmit,
  onCancel,
  submitting,
  error
}) {

  return (
    <form onSubmit={onSubmit}>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {isEditMode && (
        <div>
          <label>Employee ID</label>

          <input
            value={employee.employee_id}
            disabled
          />
        </div>
      )}

      <div>
        <label>First Name</label>

        <input
          type="text"
          name="first_name"
          value={employee.first_name}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label>Last Name</label>

        <input
          type="text"
          name="last_name"
          value={employee.last_name}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label>Phone</label>

        <input
          type="text"
          name="phone"
          value={employee.phone || ""}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Department</label>

        <input
          type="text"
          name="department"
          value={employee.department || ""}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Designation</label>

        <input
          type="text"
          name="designation"
          value={employee.designation || ""}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Salary</label>

        <input
          type="number"
          name="salary"
          value={employee.salary || ""}
          onChange={onChange}
          min="0"
        />
      </div>

      <div className="form-buttons">

        <button
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? "Saving..."
            : isEditMode
              ? "Update Employee"
              : "Save Employee"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={submitting}
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default EmployeeForm;