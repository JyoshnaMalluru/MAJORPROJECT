const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://jyoshna:TCTWmnNVijXoqal0@cluster0.ceitgh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
.then(() =>{
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data =initData.data.map((obj) => ({...obj, owner: "6677ce57596ddbbce8f3f97a"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();