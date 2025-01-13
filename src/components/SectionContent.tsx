import React, { ReactElement, ReactNode, Children } from "react";
import { useSelector } from "react-redux";
import {
  activeThemeSelector,
  themeColorClassSelector,
} from "../store/selectors/themeSelectors";
import { RootState } from "../store";
const SectionComponent = ({
  children,
  sectionTitle,
  classLists: { wrapperBlock, contentBlock },
}: any) => {
  const activeTheme = useSelector(activeThemeSelector);
  const themeColorClass = useSelector((state: RootState) =>
    themeColorClassSelector(state, activeTheme)
  );

  return (
    <section className="pt-page pt-page-current pt-page-relative">
      <div className={`section-inner ${wrapperBlock}`}>
        <div className={`page-header ${themeColorClass}`}>
          <h2 className="section-title">{sectionTitle}</h2>
        </div>
        <div className={`page-content ${contentBlock}`}>{children}</div>
      </div>
    </section>
  );
};

export default SectionComponent;
