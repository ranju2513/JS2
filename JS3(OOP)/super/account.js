class Account{
    constructor(name,email,address){
        this.acc_name=name
        this.acc_email=email
        this.acc_address=address
        
    }
}
class SA extends Account{
    constructor(id,name,email,ammount,address){
    super(name,email,address)
    this.acc_id=id
    this.acc_amount=ammount
}
}
let c1=new SA(101, "Rahul", "rahul@gmail.com", 50001, "New Delhi-GB")
let c2 = new SA(102, "Sonia", "sonial@gmail.com", 150001, "New Delhi-10 Janpath")
console.log(c1)
console.log(c2)