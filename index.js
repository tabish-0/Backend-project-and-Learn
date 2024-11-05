const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());  // in do line se parse ho gya, form ka data handle kar payenge
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')   // yaha view engine ko ejs set kat diye


app.get("/",function(req, res){
    res.render("index")  // send ki jagah render kyuki isse ejs mein likhi hui code jayegi jo ki (views) folder me hogi
})

app.get("/profile/:username",function(req,res){   //jab waha se tabish bheja waha se aya backend and backend se wapis tabish aya frontened
    res.send(`Welcome, ${req.params.username}`)
})

app.get("/author/:username/:age", function(req,res){
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`)
})

app.listen(3000,function(){
    console.log("it running")
}) 