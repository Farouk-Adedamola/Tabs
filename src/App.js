import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./index.css";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newPerson = await response.json();
    setData(newPerson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  const { title, duties, company, dates } = data[value];
  return (
    <>
      <section className="header">
        <h1 className="header-title">Experience</h1>
        <div className="underline"></div>
      </section>
      <div className="overall-container">
        <main className="main-btn">
          {data.map((item, index) => {
            return (
              <>
                <button
                  key={item.id}
                  className={`each-btn ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              </>
            );
          })}
        </main>
        <div className="container">
          <div className="initials">
            <h3 className="initials-title">{title}</h3>
            <h5 className="company">{company}</h5>
            <p className="date">{dates}</p>
          </div>
          <div className="duties">
            {duties.map((duty, index) => {
              return (
                <div key={index} className="duty">
                  <FaAngleDoubleRight className="icon" />
                  <p className="paragraph">{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
