import React from 'react';
import './App.css';
import MainLayout from './layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';


// const data = [
//   { model: "Model1", version: "1.0.3", dataTrained: "4-03-2023", size: "654 MB", id: "1" },
//   { model: "Model2", version: "2.0.2", dataTrained: "3-28-2023", size: "1.32 GB", id: "2" },
//   { model: "Model3", version: "0.0.4", dataTrained: "3-25-2023", size: "213 MB", id: "3" },
// ]

function App() {
  return (
    <MainLayout>
      <div>
        Home
      </div>
    </MainLayout>
  );
}

export default App;
