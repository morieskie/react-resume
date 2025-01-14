import SectionComponent from "../../components/SectionContent";
import TestimonialComponent from "../../components/TestimonialComponent";

const ServiceComponent = () => {
  return (
    <SectionComponent
      sectionTitle="Services"
      classLists={{
        wrapperBlock: "custom-page-content",
        headerBlock: "color-1",
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="block-title">
            <h3>
              My <span>Services</span>
            </h3>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="service-block">
            <div className="service-info">
              {/* <!--<i className="service-icon fa fa-shopping-cart"></i>--> */}
              <div className="service-image">
                <img
                  src="/assets/images/service/web_design_icon.png"
                  alt="Responsive Design"
                  className="mCS_img_loaded"
                />
              </div>
              <h4>Web Design</h4>
              <p>
                When it comes to website design, my speciality is to build
                visually appealing websites with user experience in mind.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="service-block">
            <div className="service-info">
              <div className="service-image">
                <img
                  src="/assets/images/service/photography_icon.png"
                  alt="Photography"
                  className="mCS_img_loaded"
                />
              </div>
              <h4>CRM Development</h4>
              <p>
                A CRM's core purpose is to improve & maintain these
                relationships and ultimately increase company profitability.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="service-block">
            <div className="service-info">
              <div className="service-image">
                <img
                  src="/assets/images/service/mobile_app_icon.png"
                  alt="Advetising"
                  className="mCS_img_loaded"
                />
              </div>
              <h4>Mobile Apps</h4>
              <p>
                A lot goes into developing a mobile app that meets your eye.
                Apps are redefining the way we interact with services,
                businesses and people.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="service-block">
            <div className="service-info">
              <div className="service-image">
                <img
                  src="/assets/images/service/advetising_icon.png"
                  alt="Advetising"
                  className="mCS_img_loaded"
                />
              </div>
              <h4>Creative Consultancy</h4>
              <p>
                Is about tackling a business problem, taking it through a
                process of design thinking and getting a creative solution as a
                deliverable.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-6 col-md-3">
          <div className="service-block">
            <div className="service-info">
              <div className="service-image">
                <img
                  src="/assets/images/service/creativity_icon.png"
                  alt="Creativity"
                  className="mCS_img_loaded"
                />
              </div>
              <h4>PWA Development</h4>
              <p>
                Future of apps “PWA” Invented by Google, championed by me.
                Faster performance, larger audience and more.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <TestimonialComponent />
    </SectionComponent>
  );
};

export default ServiceComponent;
