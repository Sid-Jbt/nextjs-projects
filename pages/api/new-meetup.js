import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    const client = await MongoClient.connect(
      "mongodb+srv://siddharth:H2NfhiRzX45mLkE2@cluster0.wfvlazp.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
  else{
    console.log("Errrroorrrr!!");
  }
};

export default handler;
