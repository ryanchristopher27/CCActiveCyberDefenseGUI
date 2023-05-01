import React from 'react';
import MainLayout from '../layout/MainLayout';
import AccuracyChart from '../components/AccuracyLineChart';
import PositiveChart from '../components/PositiveRateChart';


const data = {
    model: "Model1",
    version: "1.0.3",
    dateTrained: "4-03-2023",
    size: "654 MB",
    hyperParameters: {
        learningRate: "0.001",
        numOfLayers: "20",
        batchSize: "12"
    },
    trainingData: {
        source: "~",
        size: "200",
        features: "10"
    },
    trainingPerformance: {
        numOfEpochs: "10",
        timeToTrain: "1:03:21",
        trainingLoss: "0.15"
    },
    modelUpdates: {
        lastChanged: "2-27-2023",
        numOfChanges: "7",
        numOfUsers: "3"
    }
}

const tableData = {
    zero: {
        precision: "0.77",
        recall: "0.86",
        f1Score: "0.81",
        support: "37584"
    },
    one: {
        precision: "0",
        recall: "0.75",
        f1Score: "0.79",
        support: "37577"
    },
    accuracy: {

        f1Score: "0.80",
        support: "75161"
    },
    macroAvg: {
        precision: "0.81",
        recall: "0.80",
        f1Score: "0.80",
        support: "75161"
    },
    weightedAvg: {
        precision: "0.81",
        recall: "0.80",
        f1Score: "0.80",
        support: "75161"
    }
}

// google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawCurveTypes);

// function drawCurveTypes() {
//       var data = new google.visualization.DataTable();
//       data.addColumn('number', 'X');
//       data.addColumn('number', 'Dogs');
//       data.addColumn('number', 'Cats');

//       data.addRows([
//         [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
//         [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
//         [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
//         [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
//         [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
//         [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
//         [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
//         [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
//         [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
//         [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
//         [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
//         [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
//       ]);

//       var options = {
//         hAxis: {
//           title: 'Time'
//         },
//         vAxis: {
//           title: 'Popularity'
//         },
//         series: {
//           1: {curveType: 'function'}
//         }
//       };

//       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//       chart.draw(data, options);
//     }

const SelectedModel = () => {
    return (
        <MainLayout>
            <div className="SelectedModel">
                <header className="SelectedModel-Header">
                    <h1 class="Header">
                        {data.model}
                    </h1>
                </header>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingGeneral">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseGeneral" aria-expanded="false" aria-controls="flush-collapseGeneral">
                                General
                            </button>
                        </h2>
                        <div id="flush-collapseGeneral" class="accordion-collapse collapse" aria-labelledby="flush-headingGeneral" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Version: {data.version}</li>
                                    <li class="list-group-item">Date Trained: {data.dateTrained}</li>
                                    <li class="list-group-item">Size: {data.size}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingHyperParams">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseHyperParams" aria-expanded="false" aria-controls="flush-collapseHyperParams">
                                Hyper-Parameters
                            </button>
                        </h2>
                        <div id="flush-collapseHyperParams" class="accordion-collapse collapse" aria-labelledby="flush-headingHyperParams" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Learning Rate: {data.hyperParameters.learningRate}</li>
                                    <li class="list-group-item">Number of Layers: {data.hyperParameters.numOfLayers}</li>
                                    <li class="list-group-item">Batch Size: {data.hyperParameters.batchSize}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTrainingData">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTrainingData" aria-expanded="false" aria-controls="flush-collapseTrainingData">
                                Training Data
                            </button>
                        </h2>
                        <div id="flush-collapseTrainingData" class="accordion-collapse collapse" aria-labelledby="flush-headingTrainingData" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Source: {data.trainingData.source}</li>
                                    <li class="list-group-item">Size: {data.trainingData.size}</li>
                                    <li class="list-group-item">Features: {data.trainingData.features}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTrainingPerf">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTrainingPerf" aria-expanded="false" aria-controls="flush-collapseTrainingPerf">
                                Training Performance
                            </button>
                        </h2>
                        <div id="flush-collapseTrainingPerf" class="accordion-collapse collapse" aria-labelledby="flush-headingTrainingPerf" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Number of Epochs: {data.trainingPerformance.numOfEpochs}</li>
                                    <li class="list-group-item">Time to Train: {data.trainingPerformance.timeToTrain}</li>
                                    <li class="list-group-item">Training Loss: {data.trainingPerformance.trainingLoss}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingModelUpdates">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseModelUpdates" aria-expanded="false" aria-controls="flush-collapseModelUpdates">
                                Model Updates
                            </button>
                        </h2>
                        <div id="flush-collapseModelUpdates" class="accordion-collapse collapse" aria-labelledby="flush-headingModelUpdates" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Last Changed: {data.modelUpdates.lastChanged}</li>
                                    <li class="list-group-item">Number of Changes: {data.modelUpdates.numOfChanges}</li>
                                    <li class="list-group-item">Number of Users: {data.modelUpdates.numOfUsers}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <div id="chart_div"></div> */}
                <div class="GraphDiv">
                    <h1 class="Subheader">
                        Model Analytics
                    </h1>
                    <div class="TableDiv">
                        <table class="MetricsTable">
                            <tr class="MetricsTableHeader">
                                <th></th>
                                <th>Precision</th>
                                <th>Recall</th>
                                <th>F1-Score</th>
                                <th>Support</th>
                            </tr>
                            <tr class="MetricsTableRows">
                                <td class="MetricsTableData">0</td>
                                <td class="MetricsTableData">{tableData.zero.precision}</td>
                                <td class="MetricsTableData">{tableData.zero.recall}</td>
                                <td class="MetricsTableData">{tableData.zero.f1Score}</td>
                                <td class="MetricsTableData">{tableData.zero.support}</td>
                            </tr>
                            <tr class="MetricsTableRows">
                                <td class="MetricsTableData">1</td>
                                <td class="MetricsTableData">{tableData.one.precision}</td>
                                <td class="MetricsTableData">{tableData.one.recall}</td>
                                <td class="MetricsTableData">{tableData.one.f1Score}</td>
                                <td class="MetricsTableData">{tableData.one.support}</td>
                            </tr>
                            <tr class="MetricsTableRows EmptyRow">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr class="MetricsTableRows">
                                <td class="MetricsTableData">Accuracy</td>
                                <td class="MetricsTableData"></td>
                                <td class="MetricsTableData"></td>
                                <td class="MetricsTableData">{tableData.accuracy.f1Score}</td>
                                <td class="MetricsTableData">{tableData.accuracy.support}</td>
                            </tr>
                            <tr class="MetricsTableRows">
                                <td class="MetricsTableData">Macro Average</td>
                                <td class="MetricsTableData">{tableData.macroAvg.precision}</td>
                                <td class="MetricsTableData">{tableData.macroAvg.recall}</td>
                                <td class="MetricsTableData">{tableData.macroAvg.f1Score}</td>
                                <td class="MetricsTableData">{tableData.macroAvg.support}</td>
                            </tr>
                            <tr class="MetricsTableRows">
                                <td class="MetricsTableData">Weighted Average</td>
                                <td class="MetricsTableData">{tableData.weightedAvg.precision}</td>
                                <td class="MetricsTableData">{tableData.weightedAvg.recall}</td>
                                <td class="MetricsTableData">{tableData.weightedAvg.f1Score}</td>
                                <td class="MetricsTableData">{tableData.weightedAvg.support}</td>
                            </tr>
                        </table>
                    </div>
                    <AccuracyChart />
                    <PositiveChart />
                </div>
            </div>
        </MainLayout>
    );
};

export default SelectedModel;