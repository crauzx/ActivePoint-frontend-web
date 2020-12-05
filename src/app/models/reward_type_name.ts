export class RewardTypes {

    private id:number
    private type_name:string

    constructor(id:number, type_name:string){
        this.id = id
        this.type_name = type_name
    }

    public getRewardTypeId():number{
        return this.id
    }

    public getRewardTypeName():string{
        return this.type_name
    }

}