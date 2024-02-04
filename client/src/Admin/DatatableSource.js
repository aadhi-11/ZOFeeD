export const userColumns=[
    {field:"id", headerName:"ID", width: 70 },
    {field:"user",headerName:"User",width:230,renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},
    {
        field:"email",headerName:"Email",width:300,
    },
    {
        field:"age",headerName:"Age",width:100,
    },
    {
        field:"status",
        headerName:"status",
        width:150,
        renderCell:(params)=>{
            return<div className={` cellWithstatus ${params.row.status}`}> {params.row.status}</div>
        },
    }
    
]

//temporary data
export const userRows=[
    {
        id:1,
        username:"Sajal P T",
        img:"https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701648000&semt=ais",
        status:"active",
        email:"sajalpt@gmail.com",
        age:23,
    },
    {
        id:2,
        username:"Nishad",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy50BUmqL3TwTGBoMlKdc4XKIZn6GPOlrgeNF-MgOpx7r6aeF1_u7p3ZeLYq_3fdhV2wI&usqp=CAU",
        status:"passive",
        email:"snishad@gmail.com",
        age:21,
    },
    {
        id:3,
        username:"Sreyas prasanth",
        img:"https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6191.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
        status:"pending",
        email:"sreyas@gmail.com",
        age:20,
    },
    {
        id:4,
        username:"Midhun Santhosh",
        img:"https://img.freepik.com/free-photo/close-up-portrait-serious-attractive-man-student-with-dark-bristle-wears-spectacles_273609-17371.jpg",
        status:"active",
        email:"msanthoshidhun@gmail.com",
        age:21,
    },
    {
        id:5,
        username:"Noorul Ameen",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2LQ8cSqXGBRKwHo8rIyCW8B5pYo2X9ry0M5h1oYjjwZsKRicreY57RirqlmjuhbX6Qc&usqp=CAU",
        status:"passive",
        email:"nooru@gmail.com",
        age:21,
    },
    {
        id:6,
        username:"Hima Madhu",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDMOtwEeME33MIRO_Jfe3Vismgdn0b36nz0hI-oIoAKI-uADkD1gH3OWquoJOkXlgBcA&usqp=CAU",
        status:"active",
        email:"himamadhuu@gmail.com",
        age:21,
    },
    {
        id:7,
        username:"Swetha Satheesh",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7LQoyCoW6PLoeOfxTd88x6X4uiaIrVu72vGi4-720OT-lxjiefIHKr9M9DTodlS0mq8&usqp=CAU",
        status:"pending",
        email:"swethasatheesh@gmail.com",
        age:20,
    },
    {
        id:8,
        username:"Muhammed Shaharas",
        img:"https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg",
        status:"active",
        email:"shahaharas@gmail.com",
        age:20,
    },

];