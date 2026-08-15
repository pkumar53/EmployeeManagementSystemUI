function EmployeeTable({
  employees,
  onEdit,
  onDelete
}) {
  if (employees.length === 0) {
    return (
      <p className="no-data">
        No employees found.
      </p>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.employee_id}>
            <td>{employee.employee_id}</td>

            <td>
              {employee.first_name} {employee.last_name}
            </td>

            <td>{employee.email}</td>

            <td>{employee.department}</td>

            <td>{employee.designation}</td>

            <td>
              <button
                onClick={() => onEdit(employee.employee_id)}
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(employee.employee_id)}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;