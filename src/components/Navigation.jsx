import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
export default function Navigation({ to, children }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button
          variant="outline"
          className={`w-full py-5 ${
            isActive ? "bg-secondary font-bold" : "text-white"
          }`}
        >
          {children}
        </Button>
      )}
    </NavLink>
  );
}
