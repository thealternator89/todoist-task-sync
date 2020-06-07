import fetch, {Headers} from 'node-fetch';

import {envUtil} from '../env-util';
import {TodoistTask, TodoistTaskPost} from './model/todoist-models';

const BASE_URL = "https://api.todoist.com/rest"

export class TodoistClient {
    private readonly token: string;

    constructor() {
        this.token = envUtil.getTodoistAuthToken();
    }

    public async getTasksForProject(project: number): Promise<TodoistTask[]> {
        const request = await fetch(`${BASE_URL}/v1/tasks?project_id=${project}`, {
            headers: new Headers({
                'Authorization': 'Bearer ' + this.token
            }),
        });
        return request.json();
    }

    public async createTask(task: TodoistTaskPost): Promise<TodoistTask> {
        const request = await fetch(`${BASE_URL}/v1/tasks`, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.token,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(task)
        })
        return request.json();
    }
}

export const todoistClient = new TodoistClient();
