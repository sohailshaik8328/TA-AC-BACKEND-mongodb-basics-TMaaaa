let blogArticles = [
    {
        _id : 1,
        title : "document1",
        createdAt : new Date(),
        details : "string",
        author : {
            name : "sohail shaik",
            email : 'sohailshaik765@gmail.com',
            age : 23
        },
        tags : ['html', 'css']
    },
    {
        _id : 2,
        title : "document2",
        createdAt : new Date(),
        details : "string",
        author : {
            name : "sohail shaik",
            email : 'sohailshaik765@gmail.com',
            age : 23
        },
        tags : ['JavaScript', 'nodeJS']
    },
    {
        _id : 3,
        title : "document3",
        createdAt : new Date(),
        details : "string",
        author : {
            name : "sohail shaik",
            email : 'sohailshaik765@gmail.com',
            age : 23
        },
        tags : ['mongodb', 'ReactJS']
    },
]

db.users.find({gender : 'Male', sports : {$all : ['cricket']}})

