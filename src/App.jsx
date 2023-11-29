import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AnimatedTabs from "./animation/AnimatedTabs";
import Carousel from "./animation/Carousel";
import DragableBox from "./animation/DragableBox";
import ExitEnter from "./animation/ExitEnter";
import Gesture from "./animation/Gesture";
import HoverTap from "./animation/HoverTap";
import ScrollAnimation from "./animation/ScrollAnimation";
import TextAnimation from "./animation/TextAnimation";
import CardImage from "./components/CardImage";
import Home from "./components/layouts/Home";
import RootLayout from "./components/layouts/RootLayout";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="textAnimation" element={<TextAnimation />} />
        <Route path="animatedtabs" element={<AnimatedTabs />} />
        <Route path="cardlayoutexpand" element={<CardImage />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="dragablebox" element={<DragableBox />} />
        <Route path="exitenter" element={<ExitEnter />} />
        <Route path="gesture" element={<Gesture />} />
        <Route path="hovertap" element={<HoverTap />} />
        <Route path="scrollanimation" element={<ScrollAnimation />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}
