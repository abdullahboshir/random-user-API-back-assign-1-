const express = require("express");
const cors = require('cors');
const app = express();
const dbConnect = require("./utils/dbConnect");
const  userRoute  = require("./routes/user.route");



const port = process.env.PORT || 5000;


// middle ware 
app.use(cors());
app.use(express.json());

dbConnect();

app.use('/user', userRoute)


app.get('/', (req, res) => {
    res.send('Connected User Info')
});


app.all('*', (req, res) => {
    res.send('No route found')
})

app.listen(port, (req, res) => {
    console.log('listen to port', port)
});