"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoistClient = void 0;
const node_fetch_1 = require("node-fetch");
const node_fetch_2 = require("node-fetch");
const env_util_1 = require("../env-util");
const BASE_URL = "https://api.todoist.com/rest";
const WORK_PROJECT_ID = 2237163473;
class TodoistClient {
    constructor() {
        this.token = env_util_1.envUtil.getTodoistAuthToken();
    }
    async getCurrentWorkTasks() {
        return this.getTasksForProject(WORK_PROJECT_ID);
    }
    async getTasksForProject(project) {
        return this.makeGetCall(`${BASE_URL}/v1/tasks?project_id=${project}`);
    }
    async createTask(task) {
        const request = await node_fetch_1.default(`${BASE_URL}/v1/tasks`, {
            method: 'POST',
            headers: new node_fetch_2.Headers({
                'Authorization': 'Bearer ' + this.token,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(task)
        });
        return request.json();
    }
    async makeGetCall(url) {
        const request = await node_fetch_1.default(url, {
            headers: new node_fetch_2.Headers({
                'Authorization': 'Bearer ' + this.token
            }),
        });
        return request.json();
    }
}
exports.todoistClient = new TodoistClient();
//# sourceMappingURL=todoist-client.js.map