export class Rewards {

    private rewardId:number
    private rewardTypeId:number
    private rewardTypeName:string
    private rewardDescription:string
    private rewardQuantity:number
    private rewardClaimPoint:number

    constructor(rewardId:number, rewardTypeId:number, rewardTypeName:string, rewardDescription:string, rewardQuantity:number, rewardClaimPoint:number){
        this.rewardId = rewardId
        this.rewardTypeId = rewardTypeId
        this.rewardTypeName = rewardTypeName
        this.rewardDescription = rewardDescription
        this.rewardQuantity = rewardQuantity
        this.rewardClaimPoint = rewardClaimPoint
    }

    public getRewardId():number{
        return this.rewardId
    }

    public getRewardTypeId():number{
        return this.rewardTypeId
    }

    public getRewardTypeName():string{
        return this.rewardTypeName
    }

    public getRewardDescription():string{
        return this.rewardDescription
    }

    public getRewardQuantity():number{
        return this.rewardQuantity
    }

    public getRewardClaimPoint():number{
        return this.rewardClaimPoint
    }

}