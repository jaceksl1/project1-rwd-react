import { useState } from "react";

const Section2 = () => {
  const workers = [
    {
      id: 1,
      name: "Catrina Mccabe (RMA Department)",
      info: "In company for over 10 years, head of the complaints department. She always puts the client's needs in the first place. She can deal with the most demanding cases.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg",
    },
    {
      id: 2,
      name: "Mateo Hull (Sales Department)",
      info: "Mateo has been with us for 6 years, he is our showcase when it comes to customer service and help in satisfying his needs. Often knows better what the client needs than the client realizes.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    },
    {
      id: 3,
      name: "Mitchel Bryan (Logistics Department)",
      info: "Logistics department manager. He knows the warehouse like his own pocket and can easily assess when a given product will reach the most demanding customers. He is a great support for the entire company.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg",
    },
    {
      id: 4,
      name: "Haniya Graham (Sales Department)",
      info: "Haniya has been working with us for 6 months and is fresh out of college. She likes contact with clients and sales. She is focused on development and appreciates the opportunities offered by our company.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
    },
    {
      id: 5,
      name: "Catrina Mccabe (RMA Department)",
      info: "In company for over 10 years, head of the complaints department. She always puts the client's needs in the first place. She can deal with the most demanding cases.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg",
    },
    {
      id: 6,
      name: "Mateo Hull (Sales Department)",
      info: "Mateo has been with us for 6 years, he is our showcase when it comes to customer service and help in satisfying his needs. Often knows better what the client needs than the client realizes.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
    },
    {
      id: 7,
      name: "Mitchel Bryan (Logistics Department)",
      info: "Logistics department manager. He knows the warehouse like his own pocket and can easily assess when a given product will reach the most demanding customers. He is a great support for the entire company.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg",
    },
    {
      id: 8,
      name: "Haniya Graham (Sales Department)",
      info: "Haniya has been working with us for 6 months and is fresh out of college. She likes contact with clients and sales. She is focused on development and appreciates the opportunities offered by our company.",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
    },
  ];

  const INIT_SHOW_WORKERS = 0;
  const [showWorker, setShowWorker] = useState(INIT_SHOW_WORKERS);

  return (
    <div>
      <section class="section2">
        <h1 class="section2-h1">
          <p id="o_nas">Our Team</p>
        </h1>
        <ul>
          {workers
            .filter((items, index) => index <= showWorker)
            .map(({ id, name, info, url }) => (
              <li class="list1">
                <div class="part1">
                  <img key={id} class="person-avatar" src={url} alt="worker" />
                  <h4 class="person-h">{name}</h4>
                  <p class="person-p">{info}</p>
                </div>
              </li>
            ))}
        </ul>
        <div className="btn-wrapper">
          <button
            onClick={(e) => setShowWorker(showWorker + 1)}
            className="addOfferBtn">
            Check rest of the team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section2;
