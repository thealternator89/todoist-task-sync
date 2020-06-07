import {bitbucketClient} from './rest-clients/bitbucket-client';
import {todoistService} from './services/todoist-service';

(async () => {
    await todoistService.updateTasks();
    const openPullRequests = await bitbucketClient.getOpenPullRequests();
    await todoistService.createMissingPullRequestTasks(openPullRequests.values);
})().catch((ex)=> {
    console.error (`An error occurred, ${ex.message}`);
})
