function employee(id,name,sal){
    this.id=id
    this.name=name
    this.sal=sal
    let tax=5000
    let cal_emp_sal =()=>{
        console.log(`Emp sal:${this.sal-tax}`)   
    }
    this.getemp_details=()=>{
        console.log(`Emp Id: ${this.id} and Emp Name: ${this.name}`)
        cal_emp_sal()

    }
}
let e1=new employee(101,"ranju",45000)
e1.tax=5000
e1.getemp_details()
//e1.cal_emp_sal()
//console.log(e1)