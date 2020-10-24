export class Users {
    private email:string
    private role:string
    private point:number

    constructor(email:string, role:string, point:number){
        this.email = email
        this.role = role
        this.point = point
    }

    public getEmail():string{
        return this.email
    }

    public getRole():string{
        return this.role
    }

    public getPoint():number{
        return this.point
    }

}
