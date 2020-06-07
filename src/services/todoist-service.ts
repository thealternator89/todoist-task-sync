import {todoistClient, TodoistClient} from '../rest-clients/todoist-client';
import {TodoistTask} from '../rest-clients/model/todoist-models';
import {BitbucketPullRequestItem} from '../rest-clients/model/bitbucket-models';

const PROJECT_ID = {
    WORK: 2237163473
}

const SECTION_ID = {
    PR: 12377533,
    JIRA_TICKET: 2237163473,
};

class TodoistService {
    private client = new TodoistClient();
    private tasks: TodoistTask[];

    public async updateTasks() {
        this.tasks = await this.client.getTasksForProject(PROJECT_ID.WORK)
    }

    public async createMissingPullRequestTasks(pullRequests: BitbucketPullRequestItem[]) {
        const prsWithNoTask = pullRequests.filter((pr) => !this.prHasTask(pr));
        for (const pr of prsWithNoTask) {
            await this.createPullRequestTask(pr);
        }
    }

    private async createPullRequestTask(pullRequest: BitbucketPullRequestItem) {
        await todoistClient.createTask({
            content: `${pullRequest.title} [${this.getIdFromPullRequest(pullRequest)}]`,
            project_id: PROJECT_ID.WORK,
            section_id: SECTION_ID.PR,
            due_string: "Today"
        })
    }

    private prHasTask(pullRequest: BitbucketPullRequestItem): boolean {
        return !!this.tasks.find((task) =>
            task.content.endsWith(`[${this.getIdFromPullRequest(pullRequest)}]`));
    }

    private getIdFromPullRequest(pullRequest: BitbucketPullRequestItem): string {
        return `${pullRequest.toRef.repository.slug}#${pullRequest.id}`;
    }
}

export const todoistService = new TodoistService();
