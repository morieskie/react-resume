import { SyntheticEvent } from "react";
import { useLocation } from "react-router-dom";
import { selectPortfolioItemById } from "../../../store/selectors/portfolioSelectors";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ImagePreloadComponent from "../../../components/ImagePreloadComponent";
const PrevSlideButton = () => {
  const swiper = useSwiper();
  return <div className="owl-prev" onClick={() => swiper.slidePrev()}></div>;
};

const NextSlideButton = () => {
  const swiper = useSwiper();
  return <div className="owl-next" onClick={() => swiper.slideNext()}></div>;
};
const PortfolioDetailComponent = ({
  emitClose,
}: {
  emitClose: CallableFunction;
}) => {
  const location = useLocation();
  const portfolio = useSelector((state: RootState) =>
    selectPortfolioItemById(state, String(location.hash).replace("#", ""))
  );

  const onCloseHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setTimeout(() => emitClose(), 300);
  };

  return (
    <>
      {portfolio && (
        <div
          key={portfolio.id}
          id="page-ajax-loaded"
          className="page-portfolio-loaded animated"
        >
          <div className="ajax-page-wrapper">
            <div className="ajax-page-nav">
              <div className="nav-item ajax-page-prev-next">
                <a className="ajax-page-load" href="portfolio-2.html">
                  <i className="zmdi zmdi-chevron-left"></i>
                </a>
                <a className="ajax-page-load" href="portfolio-4.html">
                  <i className="zmdi zmdi-chevron-right"></i>
                </a>
              </div>
              <div className="nav-item ajax-page-close-button">
                <a
                  id="ajax-page-close-button"
                  href="/"
                  onClick={onCloseHandler}
                >
                  <i className="zmdi zmdi-close"></i>
                </a>
              </div>
            </div>

            <div className="ajax-page-title">
              <h1>{portfolio.project}</h1>
            </div>

            <div className="row">
              <div className="col-sm-7 col-md-7 portfolio-block">
                <div className="owl-carousel portfolio-page-carousel">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={false} // Enables built-in navigation buttons
                    pagination={true}
                    modules={[Navigation, Pagination]}
                  >
                    <ImagePreloadComponent>
                      <div className="owl-stage-outer">
                        {portfolio.images.map((img: string, index: number) => (
                          <SwiperSlide key={index}>
                            <div className="item" key={index}>
                              <img
                                src={img}
                                alt={portfolio.altTitle}
                                style={{ maxHeight: "800px" }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </ImagePreloadComponent>
                    {portfolio.images.length > 1 && (
                      <div className="owl-nav" style={{ zIndex: 1 }}>
                        <PrevSlideButton />
                        <NextSlideButton />
                      </div>
                    )}
                  </Swiper>
                </div>
              </div>

              <div className="col-sm-5 col-md-5 portfolio-block">
                {/* <!-- Project Description --> */}
                <div className="block-title">
                  <h3>Description</h3>
                </div>
                <ul className="project-general-info">
                  {/* <li>
                    <p>
                      <i className="fa fa-user"></i> 
                    </p>
                  </li> */}
                  {portfolio.url && (
                    <li>
                      <p>
                        <i className="fa fa-globe"></i>
                        <a
                          href={portfolio.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {portfolio.url}
                        </a>
                      </p>
                    </li>
                  )}
                  {portfolio.date && (
                    <li>
                      <p>
                        <i className="fa fa-calendar"></i>{" "}
                        {new Date(portfolio.date).getFullYear()}
                      </p>
                    </li>
                  )}
                </ul>

                <p className="text-justify">
                  {portfolio.description
                    ? portfolio.description
                    : "To be updated soon..."}
                </p>
                {/* <!-- /Project Description --> */}

                {/* <!-- Technology --> */}
                <div className="tags-block">
                  <div className="block-title">
                    <h3>Technology</h3>
                  </div>
                  <ul className="tags">
                    {portfolio.technologies.map((tech: string) => (
                      <li key={tech}>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <!-- /Technology --> */}

                {/* <!-- Share Buttons --> */}
                {/* <div className="btn-group share-buttons">
                  <div className="block-title">
                    <h3>Share</h3>
                  </div>
                  <a href="/" target="_blank" className="btn">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/" target="_blank" className="btn">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/" target="_blank" className="btn">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </div> */}
                {/* <!-- /Share Buttons --> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioDetailComponent;
