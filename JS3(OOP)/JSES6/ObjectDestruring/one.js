let contact = {
    name:{
        first_name:"rahul",
        last_name:"gandhi"
    },
    id:101,
    loc: ['Wayanad', 'New Delhi'],
    sal:20000
    }
    console.log(contact.name.first_name)
    let{name}=contact
    let{first_name}= name
    console.log(first_name)