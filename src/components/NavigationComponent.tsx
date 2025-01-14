import { NavLink, useLocation } from "react-router-dom";
import { hideMobileMenu } from "../store/slices/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { menuHeaderClassesSelector } from "../store/selectors/menuSelectors";

const NavigationComponent = ({ menus }: { menus: string[] }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const dispatch = useDispatch<AppDispatch>();
  const menuClasses = useSelector(menuHeaderClassesSelector);

  const activeClass = (menu: string) => {
    return menu.toLowerCase() === path ||
      (menu.toLowerCase() === "home" && path === "")
      ? "active"
      : "";
  };

  const preNavigate = () => {
    if (menuClasses.indexOf("mobile-menu-hide") === -1)
      dispatch(hideMobileMenu());
  };

  return (
    <div className={`site-nav`}>
      <ul id="nav" className="site-main-menu">
        {menus.map((menu: string, index: number) => (
          <li key={index} className={activeClass(menu)}>
            <NavLink
              to={"/" + menu.toLowerCase()}
              onClick={preNavigate}
              viewTransition
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationComponent;
