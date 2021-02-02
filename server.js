const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/src/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/src/about.html'));
});

app.get('/sitemap',function(req,res){
    res.sendFile(path.join(__dirname+'/src/sitemap.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})