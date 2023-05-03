import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import image from "../img/blueCircuits.png";

const ModelList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("API_URL_HERE");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("API request failed. Using static data instead.");
        const staticdata = [
          { model: "Model1", version: "1.0.3", dataTrained: "4-03-2023", size: "654 MB", id: "1" },
          { model: "Model2", version: "2.0.2", dataTrained: "3-28-2023", size: "1.32 GB", id: "2" },
          { model: "Model3", version: "0.0.4", dataTrained: "3-25-2023", size: "213 MB", id: "3" },
        ];
        setData(staticdata);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    console.log(`Button clicked for row with id ${id}`);
  };

  return (
    <MainLayout>
      <div className="ModelList" style={{ backgroundImage: `url(${image})` }}>
        <header className="ModelList-Header">
          <h1 className="Header">Models</h1>
          <div className="TableDiv">
            <table className="ModelListTable">
              <thead>
                <tr className="TableHeader">
                  <th>Model</th>
                  <th>Version</th>
                  <th>Data Trained</th>
                  <th>Size</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key} className="TableRows">
                      <td>{val.model}</td>
                      <td>{val.version}</td>
                      <td>{val.dataTrained}</td>
                      <td>{val.size}</td>
                      <td>
                        <button type="button" className="SelectButton" onClick={() => handleClick(val.id)}>
                          Select
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </header>
      </div>
    </MainLayout>
  );
};

export default ModelList;
