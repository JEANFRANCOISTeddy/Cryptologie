const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/src/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/MD5',function(req,res){
    res.sendFile(path.join(__dirname+'/src/MD5.html'));
});

app.get('/SHA2-256',function(req,res){
    res.sendFile(path.join(__dirname+'/src/SHA2-256.html'));
});

app.get('/Keccak-512',function(req,res){
    res.sendFile(path.join(__dirname+'/src/Keccak-512.html'));
});

app.get('/RipeMD160',function(req,res){
    res.sendFile(path.join(__dirname+'/src/RipeMD160.html'));
});

app.get('/AES',function(req,res){
    res.sendFile(path.join(__dirname+'/src/AES.html'));
});

app.get('/SHA3-512',function(req,res){
    res.sendFile(path.join(__dirname+'/src/SHA3-512.html'));
});

app.get('/Blowfish',function(req,res){
    res.sendFile(path.join(__dirname+'/src/Blowfish.html'));
});

app.get('/RSA',function(req,res){
    res.sendFile(path.join(__dirname+'/src/RSA.html'));
});



app.get('/crypto-js.js',function(req,res){
    res.sendFile(path.join(__dirname+'/src/crypto-js.js'));
});

app.get('/Blowfish.js',function(req,res){
    res.sendFile(path.join(__dirname+'/src/Blowfish.js'));
});

app.get('/jquery.blowfish.js',function(req,res){
    res.sendFile(path.join(__dirname+'/src/jquery.blowfish.js'));
});

app.get('/sha3.js',function(req,res){
    res.sendFile(path.join(__dirname+'/src/sha3.js'));
});

app.get('/jsencrypt.min.js',function(req,res){
    res.sendFile(path.join(__dirname+'/src/jsencrypt.min.js'));
});

app.get('/jsencrypt.js',function(req,res){
    res.sendFile(path.join(__dirname+'/src/jsencrypt.js'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})