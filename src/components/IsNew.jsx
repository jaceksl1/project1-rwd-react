import React from "react";

const IsNew = () => {
  const items = [
    { id: 1, name: "usługa (nowość 1)" },
    { id: 2, name: "usługa (nowość 2)" },
    { id: 3, name: "usługa (nowość 3)" },
    { id: 3, name: "usługa (nowość 4)" },
    { id: 5, name: "usługa (nowość 5)" },
    { id: 6, name: "usługa (nowość 6)" },
    { id: 7, name: "usługa (nowość 7)" },
    { id: 8, name: "usługa (nowość 8)" },
  ];

  const item = items.map((item) => (
    <button key={item.toString()} className="s3-button">
      <div className="dot"></div>
      <p className="section3-p1">{item.name}</p>
    </button>
  ));

  return <>{item[1]}</>;
};

export default IsNew;
