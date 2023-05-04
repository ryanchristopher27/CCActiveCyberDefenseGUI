import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import image from "../img/blueCircuits.png";

const data = [
    { model: "Model1", version: "1.0.3", dataTrained: "4-03-2023", size: "654 MB", id: "1" },
    { model: "Model2", version: "2.0.2", dataTrained: "3-28-2023", size: "1.32 GB", id: "2" },
    { model: "Model3", version: "0.0.4", dataTrained: "3-25-2023", size: "213 MB", id: "3" },
]

const ModelList = () => {
    const navigate = useNavigate()

    function handleClick(id) {
        navigate({pathname: "/selectedModel", search: createSearchParams({id: id}).toString()})
    }

    return (
        <MainLayout>
            <div className="ModelList" style={{ backgroundImage:`url(${image})` }}>
                <header className="ModelList-Header">
                    <h1 class="Header">
                        Models
                    </h1>
                    <div class="TableDiv">
                        <table class="ModelListTable">
                            <tr class="TableHeader">
                                <th>Model</th>
                                <th>Version</th>
                                <th>Data Trained</th>
                                <th>Size</th>
                                <th>Select</th>
                            </tr>
                            {data.map((val, key) => {
                                return (
                                    <tr key={key} class="TableRows">
                                        <td>{val.model}</td>
                                        <td>{val.version}</td>
                                        <td>{val.dataTrained}</td>
                                        <td>{val.size}</td>
                                        <td><button type="button" class="SelectButton" onClick={() => handleClick(val.id)}>Select</button></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </header>
                <body>
                </body>
            </div>
        </MainLayout>
    );
};

export default ModelList;