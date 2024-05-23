const mongoose=require("mongoose")

const connnect=()=>{
    mongoose.connect('mongodb://localhost:27017/stories', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("connected to db")).catch((err)=>console.log(err));
}

module.exports=connnect