import mockanswer = require('azure-pipelines-task-lib/mock-answer');
import mockrun = require('azure-pipelines-task-lib/mock-run');
import path = require('path')

let taskPath = path.join(__dirname, '..', 'NewmanPostman', 'newmantask.js');

console.info(taskPath);
let runner: mockrun.TaskMockRunner = new mockrun.TaskMockRunner(taskPath);
let filePath = path.join(__dirname, '/assets/Core.postman_collection.json');
runner.setInput("collectionSourceType", 'url');
runner.setInput("collectionUrl", "http://");
runner.setInput("environmentSourceType", 'none');


let answers = <mockanswer.TaskLibAnswers>{
    "checkPath": {},
    "which": {
        'newman': 'newman'
    },
    "stats": {}
};
answers.checkPath[filePath] = true;
answers.checkPath['newman'] = true;
answers.stats[filePath] = true;
runner.setAnswers(answers);

runner.run();