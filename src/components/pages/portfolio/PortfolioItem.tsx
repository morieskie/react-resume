import { motion } from "motion/react";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import DirectionAwareHoverAnchor from "../../DirectionAwareHoverAnchor";
import { IPortfoliItem } from "./IPortfolioItem";
import { appUrl } from "../../../config";

const PortfolioItem = ({
  project: { id, project, imgUrl, altTitle, categories },
}: {
  project: IPortfoliItem;
}) => {
  const nagigate = useNavigate();
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    // nagigate('')
    nagigate(`portfolio#${id}`, {replace: true, relative: 'path'});
  };

  return (
    <>
      <motion.figure
        key={id}
        initial={{ scale: 0.3, opacity: 0.35, display: "block" }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{
          scale: 0.1,
          opacity: 0,
          display: "none",
          transition: { duration: 0.3 },
        }}
        className="item"
      >
        <DirectionAwareHoverAnchor
          key={id}
          onNavigate={handleClick}
          className="ajax-page-load max-height-265"
          style={{ minWidth: 300, minHeight: 265, height: 270 }}
        >
          <img
            src={`${appUrl}/${imgUrl}`}
            alt={altTitle}
            style={{ width: 300, height: 270 }}
          />
          <div>
            <h5 className="name">{project}</h5>
            <small>{categories.slice(0, 1).join(", ")}</small>
            <i className="fa fa-file-text-o"></i>
          </div>
        </DirectionAwareHoverAnchor>
      </motion.figure>
    </>
  );
};

export default PortfolioItem;
