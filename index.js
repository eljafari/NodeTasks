const express = require("express");
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    let html = '<h1 style="color: red">Hello</h1>';

    res.render('index', { content: html });

})
app.use(express.static("views"));
app.listen(PORT, (req, res) => {
    console.log('Server Is Running')
})