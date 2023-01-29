const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://devivaraprasad:Dvp@9391@cluster0.syjej.mongodb.net/heroviredmongodbassignment?retryWrites=true&w=majority", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase 
    const db = client.db("heroviredassessments");

//Fetching Data From MongoDB Database
db.collection("Task_2_StudentData").find({Name: {$regex: /x$/}}).toArray().then((result) => {
    console.log("Details Found"),
    console.log(JSON.stringify(result, undefined, 2));
});
    (error => {
        {
            console.log("Unable To Get The Data", error)
        }
    });
client.close()  //Closing The Connection
});