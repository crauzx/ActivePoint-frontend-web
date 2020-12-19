export class ShareTasks {

    id:number
    taken_task_id:number
    user_id:number
    share_date:Date
    admin_approval:number

    constructor(id:number, taken_task_id:number, user_id:number, share_date:Date, admin_approval:number){
        this.id = id
        this.taken_task_id = taken_task_id
        this.user_id = user_id
        this.share_date = share_date
        this.admin_approval = admin_approval
    }

}
