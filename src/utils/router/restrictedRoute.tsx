import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hook-redux";

interface RestrictedRouteProps {
  component: React.ComponentType;
  redirectTo: string;
}

export function RestrictedRoute({
  component: Component,
  redirectTo,
}: RestrictedRouteProps) {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
