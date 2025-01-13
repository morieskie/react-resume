import { useDispatch, useSelector } from "react-redux";
import SectionComponent from "../../components/SectionContent";
// import { unsetLoading } from "../store/slices/loaderSlice";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence } from "motion/react";
import axios from "axios";
import { selectAllPortfolioItems } from "../../store/selectors/portfolioSelectors";
import { loadPortfolios } from "../../store/slices/portfolioSlice";
import { AppDispatch } from "../../store";
import { IPortfoliItem } from "./portfolio/IPortfolioItem";
import PortfolioItem from "./portfolio/PortfolioItem";
import ImagePreloadComponent from "../../components/ImagePreloadComponent";
import { apiUrl } from "../../config";

const PortfolioComponent = () => {
  // const isLoading = useSelector(
  //   (state: { loader: { isLoading: boolean } }) => state.loader.isLoading
  // );
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector(selectAllPortfolioItems);
  const [filteredItems, setFilteredtems] = useState<IPortfoliItem[]>(items);
  const [categories, setCategories] = useState<string[]>([]);
  const [gridHeight, setGridHeight] = useState("auto");
  const gridContainer = useRef(null);
  useEffect(() => {
    axios
      .get<any>(`${apiUrl}/data/portfolio.json`)
      .then(({ data }) => dispatch(loadPortfolios(data)));
  }, []);

  useEffect(() => {
    let arr: string[] = [];
    items.forEach((i) => (arr = [...new Set([...arr, ...i.categories])]));
    arr.sort((a, b) => (a < b ? -1 : 1));
    setCategories(arr);
    setFilteredtems(items);
  }, [items]);

  const onFilter = useCallback(
    (e: SyntheticEvent, category: string) => {
      e.preventDefault();
      if (category === "all") {
        setFilteredtems(items);
      } else
        setFilteredtems(items.filter((i) => i.categories.includes(category)));
    },
    [items]
  );

  useEffect(() => {
    if (gridContainer?.current !== null) {
      const grid = gridContainer.current as HTMLElement;
      const fisrtChild = grid.querySelector("figure");
      const h =
        Math.abs(
          Number(fisrtChild?.offsetHeight) * Math.ceil(filteredItems.length / 3)
        ) + 50;
      setGridHeight(`${h}px`);
    }
  }, [gridContainer, filteredItems]);

  return (
    <SectionComponent
      sectionTitle="Portfolio"
      classLists={{
        wrapperBlock: "custom-page-content",
      }}
    >
      <div className="portfolio-content">
        {/* <!-- Portfolio filter --> */}
        <ul id="portfolio_filters" className="portfolio-filters">
          <li className="active">
            <a
              href="/"
              className="filter btn btn-sm btn-link active"
              onClick={(e) => onFilter(e, "all")}
            >
              All
            </a>
          </li>

          {categories.map((category, index) => (
            <li key={"filter-" + index}>
              <a
                href="/"
                className="filter btn btn-sm btn-link"
                onClick={(e) => onFilter(e, category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
        {/* <!-- End of Portfolio filter --> */}

        {/* <!-- Portfolio Grid --> */}
        <div
          id="portfolio_grid"
          className="portfolio-grid three-columns shuffle"
          style={{ height: gridHeight, transition: "height 0.3s" }}
          ref={gridContainer}
        >
          <ImagePreloadComponent>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <PortfolioItem project={item} key={`${item.id}${index}`} />
              ))}
            </AnimatePresence>
          </ImagePreloadComponent>
        </div>
        {/* <!-- /Portfolio Grid --> */}
        {filteredItems && (
          <div className="row">
            <div className="center col-lg-12 col-md-12 col-sm-12">
              <a
                className="btn btn-secondary pf-load-more"
                href="/"
                data-load-text="Loading..."
                data-more-text="Load More"
              >
                Load More
              </a>
            </div>
          </div>
        )}
      </div>
    </SectionComponent>
  );
};

export default PortfolioComponent;
