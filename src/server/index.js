const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require ("cors");
const bodyParser= require ('body-parser');
const app = express();


app.use(bodyParser.urlencoded({entended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))
console.log(__dirname)
const fetch = require('node-fetch')



// Setting environment variables

  console.log(`Your API key is ${process.env.API_KEY}`);



app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post ('/apiCall',async function(req, res) {
  const urlAPI = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" +  projectInput + "&lang=en"
  const response = await fetch(urlAPI)
  try {
  const data=  await response.json
  res.send(data)
} catch(error){
  console.log ("error occured ===> ", error);
} 
});
