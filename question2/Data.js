const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://devivaraprasad:Dvp@9391@cluster0.syjej.mongodb.net/heroviredmongodbassignment?retryWrites=true&w=majority", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase Students
    const db = client.db("heroviredassessments");


    //Creating Collection In MongoDB Using insertMany
    db.collection("Task_2_StudentData").insertMany(             //Task_2_StudentData is collection name in database
        [
            {
                Student_Id: 101,
                Name: "Alex",
                Marks: 90,
                Grade: "A",
                Date: "2023-11-10"
            },
            {
                Student_Id: 102,
                Name: "John",
                Marks: 80,
                Grade: "B",
                Date: "2023-10-11"
            },
            {
                Student_Id: 103,
                Name: "Sam",
                Marks: 92,
                Grade: "A",
                Date: "2023-11-10"
            },
            {
                Student_Id: 104,
                Name: "Rob",
                Marks: 74,
                Grade: "C",
                Date: "2023-11-10"
            },
            {
                Student_Id: 105,
                Name: "Jax",
                Marks: 93,
                Grade: "A",
                Date: "2023-10-11"
            },
        ],

        (error, result) => {
            if (error) {
                console.log("Problem With Insertion", error)
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });
    client.close()  //Closing The Connection
});