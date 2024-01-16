import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Layout (LayoutAuth)
import LayoutAuth from "./Layout/LayoutAuth";
// Pages (users)
import Login from "./pages/Login";
import Register from "./pages/user/Register";
import ForgotPassword from "./pages/user/ForgotPassword";
import Confirm from "./pages/user/Confirm";

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="confirm/:id" element={<Confirm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
