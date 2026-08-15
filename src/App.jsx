import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/add-employee"
          element={<AddEmployee />}
        />

        <Route
          path="/edit-employee/:employeeId"
          element={<EditEmployee />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;