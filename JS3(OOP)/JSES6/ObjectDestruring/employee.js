class employee{
    constructor(emp){
        this.state=emp

    }
    get_name(){
        let{name}=this.state
        //return this.state.name
        return name
    }
}
let e1=new employee ({id:101, name:"rani", sal:45000})
console.log(e1)
console.log(e1.get_name())