class EnvUtil {
    public getTodoistAuthToken (): string {
        return process.env.TODOIST_AUTH_TOKEN;
    }

    public getBitbucketCredentials (): { username: string, password: string } {
        return {
            username: process.env.BITBUCKET_USERNAME,
            password: process.env.BITBUCKET_PASSWORD,
        };
    }
}

export const envUtil = new EnvUtil();
