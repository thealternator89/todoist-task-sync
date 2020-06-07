export interface TodoistTask {
    id?: number;
    project_id: number;
    section_id: number;
    order?: number;
    content?: string;
    completed?: boolean;
    label_ids?: number[];
    priority?:  number;
    comment_count?: number;
    created?: string;
    due ?: {
        recurring: boolean,
        string: string,
        date: string,
    };
    url?: string;
}

export interface TodoistTaskPost extends TodoistTask {
    due_string?: string,
}
