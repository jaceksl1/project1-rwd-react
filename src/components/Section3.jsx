import { useState } from "react";

const Section3 = () => {
  const items = [
    { id: 1, name: "On-site valuation", isNew: true },
    { id: 2, name: "Projects", isNew: true },
    { id: 3, name: "Individual orders", isNew: true },
    { id: 3, name: "Special materials", isNew: true },
    { id: 5, name: "Pricing in the office", isNew: !true },
    { id: 6, name: "Installation", isNew: !true },
    { id: 7, name: "Delivery to the door and assembly", isNew: !true },
    { id: 8, name: "Hanging lamps", isNew: !true },
    { id: 9, name: "Table lamps", isNew: !true },
    { id: 10, name: "Wooden and bamboo lamps", isNew: true },
    { id: 11, name: "Classic and antique lamps", isNew: !true },
    { id: 12, name: "Modern lamps", isNew: !true },
    { id: 13, name: "Wireless lamps", isNew: !true },
    { id: 14, name: "Industrial lamps", isNew: !true },
    { id: 15, name: "Garden lighting", isNew: true },
    { id: 16, name: "Quotation", isNew: !true },
  ];
  // use uppercase for setting const - this can be from another component or main component
  const INIT_SHOW_ITEM = 3;
  const [showItem, setShowItem] = useState(INIT_SHOW_ITEM);

  return (
    <div>
      <section class="section3">
        <div class="section3-h1">
          <h1 id="offer_1">What can we do for You?</h1>
        </div>

        <div class="section3-box">
          {items
            .filter((items, index) => index <= showItem)
            .map(({ id, name, isNew }) => (
              <button className="s3-button">
                {isNew ? <div className="dot"></div> : ""}
                {/* if isNew === true put div with className=dot */}
                <p className="section3-p">
                  <p key={id}>
                    {name} {isNew ? "(New)" : ""}
                    {/* if isNew===true add (New) */}
                  </p>
                </p>
              </button>
            ))}
        </div>
        <div className="btn-wrapper">
          <button
            onClick={(e) => setShowItem(showItem + 4)}
            className="addOfferBtn">
            Check more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section3;
