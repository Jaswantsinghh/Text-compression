const http = require('http');
const fs = require('fs');
const express = require('express');
const upload = require('express-fileupload');
const formidable = require('formidable');

const app = express();

app.use(upload());

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/client/index.html');
})


app.post('/', (req,res) =>{
    if(req.files) {
        let file = req.files.file;
        let filename = file.name;
        file.mv('./uploads/sample.txt', function (err)
        {
            if(err)
            {
                res.send(err);
            }
            else
            {
                res.send('file uploaded');
            }

        })

    }
    else
    {
        console.log("File not found");
    }
})

app.listen(8080);
