import React from 'react';
import MainLayout from '../layout/MainLayout';


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

const SelectedModel = () => {
    return (
        <MainLayout>
            <div className="SelectedModel">
                <header className="SelectedModel-Header">
                    {data.model}
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

                
            </div>
        </MainLayout>
    );
};

export default SelectedModel;