import { Constants } from "@/utils/Constants";
import { TaskApi } from "@/apis/TaskApi";

const taskApi = new TaskApi()
const constants = new Constants()


export class TaskApiFunction {

    async readStatusSSR(statusReq: any) {
        let statusObj = {
            "filter": statusReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {}
        }
        return await taskApi?.readStatusSSR(statusObj);
    }

    async readPrioritySSR(priorityReq: any) {
        let priorityObj = {
            "filter": priorityReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {}
        }
        return await taskApi?.readPrioritySSR(priorityObj);
    }

    async readSeveritySSR(severityReq: any) {
        let severityObj = {
            "filter": severityReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {}
        }
        return await taskApi?.readSeveritySSR(severityObj);
    }

    async readActivitySSR(activityReq: any) {
        let activityObj = {
            "filter": activityReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {}
        }
        return await taskApi?.readActivitySSR(activityObj);
    }

    async readAssigneeSSR(assigneeReq: any) {
        let assigneeObj = {
            "filter": assigneeReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {}
        }
        return await taskApi?.readAssigneeSSR(assigneeObj);
    }

    async readTaskSSR(taskReq: any) {
        let taskObj = {
            "filter": taskReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {
                CreatedDate: 'desc'
            }
        }
        return await taskApi?.readTaskSSR(taskObj);
    }

    async readTasks(taskReq: any) {
        let taskObj = {
            "filter": taskReq,
            "fields": {},
            "page": 0,
            "limit": 10000,
            "sort": {
                CreatedDate: 'desc'
            }
        }
        return await taskApi?.readTasks(taskObj);
    }

    async deleteTasks(taskObj: any) {
        return await taskApi?.deleteTasks(taskObj);
    }

    async createTask(taskReq:any){
        return await taskApi?.createTask(taskReq);
    }

    async updateTask(taskReq:any){


        fetch("http://localhost:3000/api/rest/tms/dataaccess/1.0.0/task/v1/tasks", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "your_token_here",
              "MerchantKey": "your_merchant_key",
              "TenantKey": "your_tenant_key"
            },
            body: JSON.stringify({ title: "Updated Task" }) // Replace with actual data
          });
        return await taskApi?.updateTask(taskReq);
    }
}