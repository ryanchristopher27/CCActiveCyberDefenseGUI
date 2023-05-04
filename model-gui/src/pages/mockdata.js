export const mockData = [
  {
    id: 1,
    model: "Model1",
    version: "1.0.3",
    dateTrained: "4-03-2023",
    size: "654 MB",
    hyperParameters: {
      learningRate: "0.001",
      numOfLayers: "20",
      batchSize: "12",
    },
    trainingData: {
      source: "~",
      size: "200",
      features: "10",
    },
    trainingPerformance: {
      numOfEpochs: "10",
      timeToTrain: "1:03:21",
      trainingLoss: "0.15",
    },
    modelUpdates: {
      lastChanged: "2-27-2023",
      numOfChanges: "7",
      numOfUsers: "3",
    },
  },
  {
    id: 2,
    model: "Model2",
    version: "3.4.3",
    dateTrained: "4-03-2023",
    size: "654 MB",
    hyperParameters: {
      learningRate: "0.001",
      numOfLayers: "20",
      batchSize: "12",
    },
    trainingData: {
      source: "~",
      size: "200",
      features: "10",
    },
    trainingPerformance: {
      numOfEpochs: "10",
      timeToTrain: "1:03:21",
      trainingLoss: "0.15",
    },
    modelUpdates: {
      lastChanged: "2-27-2023",
      numOfChanges: "7",
      numOfUsers: "3",
    },
  },
  {
    id: 3,
    model: "Model3",
    version: "3.4.3",
    dateTrained: "4-03-2023",
    size: "654 MB",
    hyperParameters: {
      learningRate: "0.001",
      numOfLayers: "20",
      batchSize: "12",
    },
    trainingData: {
      source: "~",
      size: "200",
      features: "10",
    },
    trainingPerformance: {
      numOfEpochs: "10",
      timeToTrain: "1:03:21",
      trainingLoss: "0.15",
    },
    modelUpdates: {
      lastChanged: "2-27-2023",
      numOfChanges: "7",
      numOfUsers: "3",
    },
  },
];

export const mockTableData = {
  zero: {
    precision: "0.77",
    recall: "0.86",
    f1Score: "0.81",
    support: "37584",
  },
  one: {
    precision: "0",
    recall: "0.75",
    f1Score: "0.79",
    support: "37577",
  },
  accuracy: {
    f1Score: "0.80",
    support: "75161",
  },
  macroAvg: {
    precision: "0.81",
    recall: "0.80",
    f1Score: "0.80",
    support: "75161",
  },
  weightedAvg: {
    precision: "0.81",
    recall: "0.80",
    f1Score: "0.80",
    support: "75161",
  },
};
