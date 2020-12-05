export class Tasks {

    private task_id:number
    private task_name:string
    private description:string
    private reward_point:number
    private start_date:Date
    private deadline_date:Date
    private slot:number

    constructor(taskId:number, taskName:string, description:string, rewardPoint:number, startDate:Date, deadlineDate:Date, slot:number){
        this.task_id = taskId
        this.task_name = taskName
        this.description = description
        this.reward_point = rewardPoint
        this.start_date = startDate
        this.deadline_date = deadlineDate
        this.slot = slot
    }

    public getTaskId():number{
        return this.task_id
    }

    public getTaskName():string{
        return this.task_name
    }

    public getDescription():string{
        return this.description
    }

    public getRewardPoint():number{
        return this.reward_point
    }

    public getStartDate():Date{
        return this.start_date
    }

    public getDeadlineDate():Date{
        return this.deadline_date
    }

    public getSlot():number{
        return this.slot
    }

}
