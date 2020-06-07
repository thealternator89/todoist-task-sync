export interface BitbucketPullRequestResponse {
    size: number;
    limit: number;
    isLastPage: boolean;
    values: BitbucketPullRequestItem[];
}

export interface BitbucketPullRequestItem {
    id: number;
    version: number;
    title: string;
    description: string;
    state: 'OPEN'|'DECLINED'|'MERGED';
    open: boolean;
    closed: boolean;
    createdDate: number;
    updatedDate: number;
    fromRef: Ref;
    toRef: Ref;
    locked: boolean;

}

interface Ref {
    id: string;
    displayId: string;
    latestCommit: string;
    repository: RefRepository;
}

interface RefRepository {
    slug: string;
    id: number;
    name: string;
    scmId: 'git';
    state: string;
    statusMessage: string;
    forkable: boolean;
    public: boolean;
}
