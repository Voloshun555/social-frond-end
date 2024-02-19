import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hook-redux";

interface PrivateRouteProps {
  component: React.ComponentType;
  redirectTo: string;
}

export function PrivateRoute({
  component: Component,
  redirectTo,
}: PrivateRouteProps) {
  const { isLoggedIn, isRefreshing } = useAppSelector((state) => state.auth);
  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
}
