export class Tasks {

    private taskName:string
    private description:string
    private rewardPoint:number
    private startDate:Date
    private deadlineDate:Date

    constructor(taskName:string, description:string, rewardPoint:number, startDate:Date, deadlineDate:Date){
        this.taskName = taskName
        this.description = description
        this.rewardPoint = rewardPoint
        this.startDate = startDate
        this.deadlineDate = deadlineDate
    }

    public getTaskName():string{
        return this.taskName
    }

    public getDescription():string{
        return this.description
    }

    public getRewardPoint():number{
        return this.rewardPoint
    }

    public getStartDate():Date{
        return this.startDate
    }

    public getDeadlineDate():Date{
        return this.deadlineDate
    }

}
