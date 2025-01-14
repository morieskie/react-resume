import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocation } from "react-router-dom";
import HomeComponent from "./components/pages/HomeComponent";
import ResumeComponent from "./components/pages/ResumeComponent";
import ServiceComponent from "./components/pages/ServiceComponent";
import PortfolioComponent from "./components/pages/PortfolioComponent";
import ContactComponent from "./components/pages/ContactComponent";
import PageLayoutComponent from "./components/PageLayoutComponent";
import { AnimatePresence, motion } from "motion/react";
import HeaderComponent from "./components/HeaderComponent";
import MainContentComponent from "./components/MainContentComponent";
import DynamicContentComponent from "./components/DynamicContentComponent";
import ThemeSelectorComponent from "./components/ThemeSelectorComponent";
import { PageTransitionOptions } from "./utils/PageTransitionOptions";
import axios from "axios";
import { setUser } from "./store/slices/userSlice";
import { apiUrl } from "./config";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const animations = Object.values(PageTransitionOptions.transition);

function App() {
  const location = useLocation();
  const dispatch = useDispatch();


const { initial, animate, exit } =
  animations[Math.floor(Math.random() * animations.length)];

  useEffect(() => {
    axios
      .get<any>(`${apiUrl}/data/about.json`)
      .then(({ data }) => dispatch(setUser(data)));
  }, [dispatch]);

  return (
    <>
      <PageLayoutComponent>
        <HeaderComponent />
        <MainContentComponent>
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              initial={initial}
              animate={animate}
              exit={exit}
              onAnimationStart={() => {
                const elem: HTMLElement = document.querySelector(
                  ".subpages"
                ) as HTMLElement;
                elem.style.overflow = "visible";
              }}
              className="pt-page pt-page-home pt-page-current pt-page-relative "
              data-id="home"
            >
              {location.pathname === "/" && <HomeComponent />}
              {location.pathname === "/home" && <HomeComponent />}
              {location.pathname === "/resume" && <ResumeComponent />}
              {location.pathname === "/services" && <ServiceComponent />}
              {location.pathname === "/portfolio" && <PortfolioComponent />}
              {location.pathname === "/contact" && <ContactComponent />}
            </motion.div>
          </AnimatePresence>
        </MainContentComponent>
      </PageLayoutComponent>
      <DynamicContentComponent />
      <ThemeSelectorComponent />
    </>
  );
}

export default App;
