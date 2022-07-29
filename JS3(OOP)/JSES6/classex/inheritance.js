class Account{
    constructor(id,name,email){
   this.acc_id=id
    this.acc_name=name
    this.acc_email=email
}
get_Account_Details(){
    return this.acc_id + ":" + this.acc_name;
}
get_Address(){
    return "dummy address"
}

}
class savings_Account extends Account{
    constructor(id,name,email,amount){
        super(id,name,email);
        this. acc_amount=amount

    }
    get_Account_bal(){
        return  this. acc_amount
    }
}
let sal = new savings_Account(101,"rahul", "rahul123@gmail.com",39999)
console.log(sal.get_Account_Details())
console.log(sal.get_Address())
     console.log(sal.get_Account_bal())

//class current_Account{}