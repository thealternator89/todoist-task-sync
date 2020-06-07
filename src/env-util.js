"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envUtil = void 0;
class EnvUtil {
    getTodoistAuthToken() {
        return process.env.TODOIST_AUTH_TOKEN;
    }
}
exports.envUtil = new EnvUtil();
//# sourceMappingURL=env-util.js.map