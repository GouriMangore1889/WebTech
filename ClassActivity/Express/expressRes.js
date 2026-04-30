//handling request and response
   //express applications handle http request and response
//request obj ==req==>contain infomation about the client request
  //-ex == //url
          //Headers   
          //query parameters
          //request body
// res==>the responce object sends data to the back 
//res methods=>1)res.send()==>send text
 //            2)response.status=>check http status
 //            3)responce.sendfile==>send files
//             4)response.json==> sends json format
//  

//template engine==>allows developer to ganerate dynamic html page using data from the server
//instead of static html pages are created dynamically
//e.g==>EJS(embadded javascript)
      //PUG()
      //handle bars
//why it is used?
    //=> they hepl in dynamic contents,code reusability,saperate logic from html
//installation
  //install egs=npm install egs

const express = require('express');
const app = express();
const port=3000

app.get(('/',(req,res)=>{
   //   console.log(req.query.name);
     const t=new Date();
     res.json({
        msg:"hello",
        time:t
     })
     
     
}))
app.listen(3000, () => {
    console.log(`Server running on at http://localhost:${port}`);
});