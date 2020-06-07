import fetch, {Headers} from 'node-fetch';

import {envUtil} from '../env-util';
import {TodoistTask} from './model/todoist-models';
import {BitbucketPullRequestResponse} from './model/bitbucket-models';

const BASE_URL = "http://git.fleetmatics.com:7990/rest/api"

class BitbucketClient {
    private readonly credentials: { username: string, password: string };

    constructor() {
        this.credentials = envUtil.getBitbucketCredentials();
    }

    public async getOpenPullRequests(): Promise<BitbucketPullRequestResponse> {
        const url = `${BASE_URL}/dashboard/pull-requests?state=OPEN&role=REVIEWER&participantStatus=UNAPPROVED`;

        const request = await fetch(url, {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(`${this.credentials.username}:${this.credentials.password}`)
            }),
        });
        return request.json();
    }
}

export const bitbucketClient = new BitbucketClient();
