import React, { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import image from "../img/blueCircuits.png";
// import { mockData, mockTableData } from "./mockdata";
import { apiData } from "./data";

const ModelList = () => {
  const [data, setData] = useState([]);
  const [modeList, setModelList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://44.203.9.246:5000/get_model_details"
        );
        const jsonData = await response.json();
        setData(jsonData.response);
      } catch (error) {
        console.log("API request failed. Using static data instead.");
        const staticdata = apiData;
        setData(staticdata);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setModelList(data);
    }
  }, [data]);

  const navigate = useNavigate();

  function handleClick(id) {
    navigate({
      pathname: "/selectedModel",
      search: createSearchParams({ id: id }).toString(),
    });
  }

  return (
    data && (
      <MainLayout>
        <div className="ModelList" style={{ backgroundImage: `url(${image})` }}>
          <header className="ModelList-Header">
            <h1 class="Header">Models</h1>
            <div class="TableDiv">
              <table class="ModelListTable">
                <tr class="TableHeader">
                  <th>Model</th>
                  <th>Experiment Date</th>
                  <th>Accuracy</th>
                  <th>Select</th>
                </tr>
                {modeList.map((item) => {
                  return (
                    <tr class="TableRows">
                      <td>Model {item.id}</td>
                      <td>{item.exp_date}</td>
                      <td>{item.accuracy}</td>
                      <td>
                        <button
                          type="button"
                          class="SelectButton"
                          onClick={() => handleClick(item.id)}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </header>
          <body></body>
        </div>
      </MainLayout>
    )
  );
};

export default ModelList;
