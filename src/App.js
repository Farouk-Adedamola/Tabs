import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

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
      <section>
        <h1>Experience</h1>
        <div className="underline"></div>
      </section>
      <div>
        <div>
          {data.map((item, index) => {
            return (
              <>
                <button key={item.id} onClick={() => setValue(index)}>
                  {item.company}
                </button>
              </>
            );
          })}
        </div>
        <div className="container">
          <h3 className="header">{title}</h3>
          <h5>{company}</h5>
          <p>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="">
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
