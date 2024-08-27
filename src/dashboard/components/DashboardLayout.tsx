import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../core/hooks/useAuthContext";
import DashboardLoader from "./DashboardLoader";

const DashboardLayout = () => {
  const { isLoadingAuth, user } = useAuthContext();

  if (isLoadingAuth) {
    return <DashboardLoader />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
export default DashboardLayout;
