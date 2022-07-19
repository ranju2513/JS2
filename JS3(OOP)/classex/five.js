// class
class employee {
    //class is template to construct object
    id=101;
    name="rahul gandhi";
    get_details=()=> {
 console.log("gm")
    }
}
let e1 = new employee()
console.log(e1.id)
console.log(e1.name)
e1.get_details()
let e2=new employee() 
let e3=new employee()