const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();

});

module.exports = {
    
    uri = "mongodb+srv://Grant:<grant94@mernshopping-ypddp.mongodb.net/test?retryWrites=true"
}