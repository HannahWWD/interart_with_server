const path = require('path')
const express = require('express')
const app = express()

const mockAPI = require('./mockAPI')
const collectionAPI = require('./collectionAPI')

// dependencies
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


// setup server
app.use(express.static(path.join(__dirname,'interart-app/build')));



app.get('/api/collection', (req,res) => {
    res.send(collectionAPI);
    console.log('Sent Collection');
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/interart-app/build/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
})