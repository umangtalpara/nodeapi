const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://{name}:{password}@umang.5ws6o.mongodb.net/olympics?retryWrites=true&w=majority",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("connection done"))
.catch((err) => console.log(err));
