import mockanswer = require('azure-pipelines-task-lib/mock-answer');
import mockrun = require('azure-pipelines-task-lib/mock-run');
import path = require('path')

let taskPath = path.join(__dirname, '..', 'NewmanPostman', 'newmantask.js');


let runner: mockrun.TaskMockRunner = new mockrun.TaskMockRunner(taskPath);
let filePath = path.join(__dirname, '/assets/Core.postman_collection.json');
let environment = path.join(__dirname, 'assets/Core.postman_collection.json');
let globalVars = "var1=1\nvar2=2";
runner.setInput("collectionSourceType", 'file');
runner.setInput("environmentSourceType", 'file');
runner.setInput("collectionFileSource", filePath);
runner.setInput("Contents", path.normalize("**/collection.json"));
runner.setInput("environmentFile", environment);
runner.setInput("globalVars", globalVars);

let answers = <mockanswer.TaskLibAnswers>{
    "checkPath": {},
    "which": {
        'newman': 'newman'
    },
    "stats": {}
};
answers.checkPath[filePath] = true;
answers.checkPath[environment] = true;
answers.checkPath['newman'] = true;
answers.stats[filePath] = true;
runner.setAnswers(answers);

runner.run();