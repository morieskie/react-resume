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
      <TestimonialComponent />
    </SectionComponent>
  );
};

export default ServiceComponent;
