import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container section-bg">
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instalnly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000 books"
              para="Library has books in all your favourite categories"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on your favourite books for as little as $10 "
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
