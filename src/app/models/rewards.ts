import { RewardTypes } from './reward_types'

export class Rewards {

    private id:number
    private reward_type:RewardTypes
    private description:string
    private quantity:number
    private claim_point:number

    constructor(id:number, reward_type:RewardTypes, description:string, quantity:number, claim_point:number){
        this.id = id
        this.reward_type = reward_type
        this.description = description
        this.quantity = quantity
        this.claim_point = claim_point
    }

    public getId():number{
        return this.id
    }

    public getRewardTypeName():RewardTypes{
        return this.reward_type
    }

    public getDescription():string{
        return this.description
    }

    public getQuantity():number{
        return this.quantity
    }

    public getClaimPoint():number{
        return this.claim_point
    }

}