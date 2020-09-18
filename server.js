const path = require('path')
const express = require('express')
const app = express()
const uniqid = require('uniqid')
const mockAPI = require('./mockAPI')
const collectionAPI = require('./collectionAPI')
const newPosts = [];
let archives = [];

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

// posts for the home page
app.post('/api/get-posts',(req,res)=>{
  const requestPage = req.body.page;
  let newRes = {sendPosts:[...newPosts,...mockAPI].slice(4 * (requestPage -1), 4 * requestPage)}
  res.send(newRes)
  console.log("send post page: ", requestPage)
  // console.log("new responses is:",newRes)

})

// individual articles
app.post('/api/get-article',(req,res)=>{
  const dataFromApp = req.body;
  const matchedArticle = [...newPosts,...mockAPI].filter(item=>{
    return item.id === dataFromApp.id
  })
  res.send(matchedArticle)
  console.log("send article id:",dataFromApp)
})

// save archives
app.post('/api/save-post',(req,res)=>{
  const newSaveReq = req.body;
  if(newSaveReq.isSaved && !archives.includes(newSaveReq.id)){
    archives.unshift(newSaveReq.id)
  }else{
    archives = archives.filter(archive=>archive !== newSaveReq.id)
  }
  res.send({});
  console.log("archives updated:",archives);


})

app.get('/api/save-post',(req,res)=>{
  const foundArticles = mockAPI.filter(item=>archives.includes(item.id))
  res.send({lists:archives, articles:foundArticles})
  console.log("archived fetched",archives)
})

app.post('/api/my-posts',(req,res)=>{
  const newPost = req.body;
  const completedInfo = {
    title: newPost.title,
    designer: newPost.designer,
    topic: newPost.topic,
    tags: newPost.tags.split(","),
    description:newPost.description,
    author: "Angela Mollyson",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
    likes: Math.floor(300 * Math.random()),
    alt:"my uploads",
    id:uniqid(),
    image:{
      full:newPost.image,
      regular:newPost.image,
      small:newPost.image,
      thumb:newPost.image
    }

  }
  newPosts.push(completedInfo)
  res.redirect("http://localhost:3000/")
  console.log("new post saved")

})

app.get('/api/my-posts',(req,res)=>{
  res.send({myPosts:newPosts})
  console.log("all my posts send")
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/interart-app/build/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
})