import React from "react";

export const Section2 = () => {
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
  ];

  workers.map(({ id, name, info, url }) => <p key={id}>{workers.name}</p>);

  return (
    <div>
      <section class="section2">
        <ul>
          <h1 class="section2-h1">
            <p id="o_nas">Our Team</p>
          </h1>
          <li class="list1">
            <div class="part1">
              <img class="person-avatar" src={workers[0].url} alt="worker" />
              <h4 class="person-h">{workers[0].name}</h4>
              <p class="person-p">{workers[0].info}</p>
            </div>
          </li>
          <li class="list1">
            <div class="part2">
              <img class="person-avatar" src={workers[1].url} alt="worker" />
              <div>
                <h4 class="person-h">{workers[1].name}</h4>
                <p class="person-p">{workers[1].info}</p>
              </div>
            </div>
          </li>
          <li class="list1">
            <div class="part2">
              <img class="person-avatar" src={workers[2].url} alt="worker" />
              <div>
                <h4 class="person-h">{workers[2].name}</h4>
                <p class="person-p">{workers[2].info}</p>
              </div>
            </div>
          </li>
          <li class="list1">
            <div class="part2">
              <img class="person-avatar" src={workers[3].url} alt="worker" />
              <div>
                <h4 class="person-h">{workers[3].name}</h4>
                <p class="person-p">{workers[3].info}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
