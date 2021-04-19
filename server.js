import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Videos from "./models/tiktok.js"

//app config
const app = express();
const port = process.env.PORT || 9000;
const url = 'mongodb+srv://aris:aris2121!@cluster0.dh4z2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//middleware
app.use(express.json())
app.use(Cors())

//DB Config
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true
// }).then(() => console.log('connected'))
//     .catch((err) => console.log(err))

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('tiktok runn')
});

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(201).send(data);
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(data);
    })
})


// app.listen(port,
mongoose.connect(url,
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(port, () => console.log(`server running ${port}`)))
    .catch(err => console.log(err))
