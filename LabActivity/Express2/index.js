const express = require('express');
const app = express();
const port = 3000;

//Array of Objects
const users = [
    {id : 1, name:"Gouri" ,age:20, grade : "A+"},
    {id : 2, name:"Sam" ,age:20, grade : "A++"},
    {id : 3, name:"Shravu" ,age:21, grade : "O"},
    {id : 4, name:"Ankita" ,age:21, grade : "A+"}
]

//route
app.get("/", (req, res)=>{
    res.json(users);
});

app.get("/user/:id",(req,res)=>{
    const user1 = req.params.id;
    
    const user = users.find(u => u.id == user1)
    if(user){
        res.json(user);
    }
    else{
        res.send("User not found");
    }
})
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`)

})