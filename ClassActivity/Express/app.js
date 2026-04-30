const express = require('express');
const app = express();
const port=3000

// function f1(req,res,next){
//     console.log(req.url);
//     next()
// }
// app.use(f1)
app.use((req,res,next)=>{
    console.log(`data received:${new Date()}`)
    
})

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log(`Server running on at http://localhost:${port}`);
});

app.get('/user', (req, res) => {
    res.send("GET user");
});

app.post('/user', (req, res) => {
    res.send("POST user");
});

app.put('/user', (req, res) => {
    res.send("PUT user");
});

app.delete('/user', (req, res) => {
    res.send("DELETE user");
});

app.patch('/user', (req, res) => {
    res.send("PATCH user");
});