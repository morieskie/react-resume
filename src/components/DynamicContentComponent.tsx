import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PortfolioDetailComponent from "./pages/portfolio/PortfolioDetailComponent";

const DynamicContentComponent = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setVisibility] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getClassName = useCallback((): string => {
    let result: string[] = [];
    if (!isVisible) {
      result = result.filter(
        (item) =>
          !["rotateInDownRight", "d-block", "page-portfolio-loaded"].includes(
            item
          )
      );
      result.push(
        "animated",
        "rotateInDownRight",
        "rotateOutDownRight",
        "closed",
        "d-none"
      );
    } else {
      result = result.filter(
        (item) => !["rotateOutDownRight", "closed", "d-none"].includes(item)
      );
      result.push("rotateInDownRight");
    }
    return result.join(" ");
  }, [isVisible]);
  const [classNames, setClassName] = useState<string>("");

  // useEffect(() => {
  //   if (isLoading) dispatch(unsetLoading(false));
  // }, [dispatch, isLoading]);

  useEffect(() => {
    if (location.pathname.includes("portfolio") && location.hash.length > 0) {
      setVisibility(true);
    }
  }, [location]);

  const toggle = useCallback(() => {
    const item = "ajax-page-visible";
    const body = document.body;
    if (isVisible) {
      body.classList.add(item);
    } else {
      body.classList.remove(item);
    }
  }, [isVisible]);

  useEffect(() => {
    setClassName(getClassName());
    toggle();
  }, [isVisible, getClassName, toggle]);

  const onCloseHandle = () => {
    if (containerRef.current) {
      const el = containerRef.current as HTMLElement;
      el.classList.add("rotateOutDownRight");
    }

    setTimeout(() => {
      setVisibility(false);
      setClassName(getClassName());
      toggle();
      navigate(location.pathname);
    }, 1000);
    return;
  };

  return (
    <>
      <div
        ref={containerRef}
        className={"page-portfolio-loaded animated " + classNames}
      >
        {isVisible && <PortfolioDetailComponent emitClose={onCloseHandle} />}
      </div>
    </>
  );
};

export default DynamicContentComponent;
