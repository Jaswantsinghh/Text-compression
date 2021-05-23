const http = require('http');
const fs = require('fs');
const express = require('express');
const upload = require('express-fileupload');
const formidable = require('formidable');
const app = express();
const compress = require('./modules/compression.js')



app.use(upload());

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/client/index.html');
})


app.post('/', (req,res) =>{
    if(req.files) {
        let file = req.files.file;
        let filename = file.name;
        let buf = file.data.toString('utf8');
        
        file.mv('./uploads/sample.txt', function (err)
        {
            if(err)
            {
                res.send(err);
            }
            else
            {
                res.download('./downloads/compressed_file.txt','compressed.txt');
            }

        })

    }
    else
    {
        console.log("File not found");
    }
})



app.listen(8080);
