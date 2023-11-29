import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
export default function RootLayout() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  );
}
