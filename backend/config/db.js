const mongoose=require("mongoose")


const connect=async()=>{
    await mongoose.connect('mongodb+srv://inaara:6Ebwlt71LMjyO1Us@cluster0.sevcn6d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

module.exports=connect;