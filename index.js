require('dotenv').config();


const express=require('express');


const app=express();






const port =process.env.APP_PORT;


app.use('/upload',express.static('upload'));



app.get('/',(req,res)=>{

    return res.json({status:200,msg:"welcome to home page"});

});

app.get('/about',(req,res)=>{
    return res.json({status:200,msg:"welcome to home about page"});


});
app.get('/products',(req,res)=>{

    return res.json([{_id:"101",name:"product 1"},{_id:"102",name:"product 2"}]);

});


app.get('/page',(req,res)=>{

    return res.sendFile(__dirname+'/index.html');

});



app.use((req,res)=>{

    return res.json("page not found");


});

app.listen(port,()=>{

    console.log(`sever is listening at port ${port}`);
});

