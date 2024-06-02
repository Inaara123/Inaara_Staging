const express=require('express')
const connect=require('./config/db')
const cors = require('cors')
const userRoutes = require('./routes/users')
const appointmenrRoutes=require('./routes/appointments')


const app=express();
//cors setup
app.use(cors(
    {
  origin: ["https://inaaratest.in"], // Replace with your frontend's URL
  methods: ['GET', 'POST'], // Allowed methods
  credentials: true // Allow cookies and other credentials to be sent
}
));

//url encoded for mongo db setup
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

//routes path
app.use('/users', userRoutes);
app.use('/appointments',appointmenrRoutes)



//start the server
app.listen(5000,async()=>{
    console.log("server running on port 5000")
    await connect();
    console.log("mongoDB connected");
    
})
