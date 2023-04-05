require('dotenv').config();
const express = require("express");
const db = require('./model');
const indexRouter = require('./routes/index-route');

const port = parseInt(process.env.PORT) || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use((err,req,res,next) => {
    const { status = 500, message = 'something went wrong'} = err;
    res.status(status).message(message);
})

app.use(indexRouter);

db.connection().
then(() => {
    console.log('database connected');
    app.listen(port, () => {
        console.log(`server is up and running on ${port}`);
    });
}).catch((err) => {
    console.log(err);
})






