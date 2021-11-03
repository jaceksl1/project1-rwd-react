import React from "react";
import Offer from "./Offer";
import ButtonAddOffer from "./ButtonAddOffer";

const Section3 = () => {
  const items = [
    { id: 1, name: "Offer 1 - New" },
    { id: 2, name: "Offer 2 - New" },
    { id: 3, name: "Offer 3 - New" },
    { id: 3, name: "Offer 4 - New" },
    { id: 5, name: "Offer 5" },
    { id: 6, name: "Offer 6" },
    { id: 7, name: "Offer 7" },
    { id: 8, name: "Offer 8" },
    { id: 8, name: "Offer 9" },
    { id: 8, name: "Offer 10" },
    { id: 8, name: "Offer 11" },
    { id: 8, name: "Offer 12" },
    { id: 8, name: "Offer 13" },
    { id: 8, name: "Offer 14" },
    { id: 8, name: "Offer 15" },
    { id: 8, name: "Offer 16" },
  ];

  const item = items.map((item) => <p key={item.id}>{item.name}</p>);

  return (
    <>
      <div>
        <section class="section3">
          <div class="section3-h1">
            <h1 id="oferta_1">What can we do for You?</h1>
          </div>
          <ButtonAddOffer />
          <div class="section3-box">
            <button className="s3-button">
              <Offer isNew={true} />
              <p className="section3-p">{item[0]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={true} />
              <p className="section3-p">{item[1]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={true} />
              <p className="section3-p">{item[2]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={true} />
              <p className="section3-p">{item[3]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[4]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[5]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[6]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[7]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[8]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[9]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[10]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[11]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[12]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[13]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[14]}</p>
            </button>
            <button className="s3-button">
              <Offer isNew={false} />
              <p className="section3-p">{item[15]}</p>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section3;
