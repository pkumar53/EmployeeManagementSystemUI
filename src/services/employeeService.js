import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/employees`;

export const getEmployees = () => {
  return axios.get(API_URL);
};

export const getEmployee = (employeeId) => {
  return axios.get(`${API_URL}/${employeeId}`);
};

export const createEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

export const updateEmployee = (employeeId, employee) => {
  return axios.put(`${API_URL}/${employeeId}`, employee);
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(`${API_URL}/${employeeId}`);
};