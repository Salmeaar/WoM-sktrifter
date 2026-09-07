const express = require("express");
const logReq = require('./middleware/log.request');
const capitalize = require('./middleware/capitalize');
const app = express();
const PORT = 3000;

app.use(logReq);

app.get('/', (req,res) => {
    res.send("Hello Express!");
});

/* const capitalize = (req,res,next) => {
    req.originName = req.params.name;
    req.params.name = req.params.name.toUpperCase();
    next();
}; */

app.get('/hello/:name',capitalize, (req,res) => {
    res.send(`Hello ${req.params.name}
        (Original name: ${req.originName})`);
});


app.get('/weekdays/:number', (req,res) => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    res.send(weekdays[(req.params.number-1)%7]);
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});