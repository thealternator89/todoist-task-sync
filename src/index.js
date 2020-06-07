"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoist_client_1 = require("./rest-clients/todoist-client");
const TODOIST_PROJECT_ID = {
    WORK: 2237163473
};
const TODOIST_SECTION_ID = {
    PR: 12377533,
    JIRA_TICKET: 2237163473,
};
(async () => {
    await todoist_client_1.todoistClient.createTask({
        content: 'DVIR-1123: ABC [dvir.query#52]',
        project_id: TODOIST_PROJECT_ID.WORK,
        section_id: TODOIST_SECTION_ID.PR,
        due_string: "Today"
    });
})().catch((ex) => {
    console.error(`An error occurred, ${ex.message}`);
});
//# sourceMappingURL=index.js.map