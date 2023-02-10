const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use(express.static('static', options))

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views',path.joint(__dirname,'views'))

// ENDPOINTS
app.get('/', (req, res)=>{
    
    const params = { }
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});