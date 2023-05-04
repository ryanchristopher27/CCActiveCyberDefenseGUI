import React from 'react';
import './App.css';
import MainLayout from './layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import image from "./img/blueCircuits.png";




// const data = [
//   { model: "Model1", version: "1.0.3", dataTrained: "4-03-2023", size: "654 MB", id: "1" },
//   { model: "Model2", version: "2.0.2", dataTrained: "3-28-2023", size: "1.32 GB", id: "2" },
//   { model: "Model3", version: "0.0.4", dataTrained: "3-25-2023", size: "213 MB", id: "3" },
// ]

function App() {
  return (
    <MainLayout>
      <div class="HomeDiv" style={{ backgroundImage: `url(${image})` }}>
        <header className="Home-Header">
          <h1 class="Header">
            CICADA: Cloud-based Intelligent Classification and Active Defense Approach against Modern Cyber Attacks
          </h1>
        </header>
        <div className="Spacer"></div>
        <div>
          <h1 className="Subheader">
            Track 1
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
