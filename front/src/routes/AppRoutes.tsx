import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import DashboardPage from "../pages/app/DashboardPage";

const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/app/dashboard" element={<DashboardPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
