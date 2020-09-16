const fetch = require('node-fetch');
const fs = require('fs')
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

// const url = "https://api.unsplash.com/collections/99702762/photos?client_id=WTbmmGUnHFIQiUFmUdpgt6ts226lO9mnOHGLydGkUDA&per_page=30"

// fetch(encodeURI(url))
//     .then(response => response.json())
//     .then(function (data) {
//         const strData = JSON.stringify(data);
//         fs.writeFileSync('rawAPI.json',strData)
//       }
// )


// const raw = require('./rawAPI')
// let projectData = []

// const tags = ["art","human","nature","interactive","immersive","light","impressive","people","tech","sociality","culture","experimental","wellbeing","comforting","pattern","texture","emerging","delicate","wow"]
// const topics = ["art and culture","human and nature","technology","science","daily life","society"]

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//       max: 8,
//       min: 4
//     },
//     wordsPerSentence: {
//       max: 16,
//       min: 4
//     }
//   });


function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
    


// for (const item of raw){
//     const shuffled = tags.sort(()=> 0.5 - Math.random());
//     let selected = shuffled.slice(0,randomNumber(1,4))
    
//     const newSchema = {
//         id:item.id,
//         title:"",
//         image:item.urls,
//         description:item.description ? item.description : lorem.generateParagraphs(1),
//         author:item.user.name,
//         likes:item.likes,
//         tags:selected,
//         topic: topics[randomNumber(0,topics.length)]
//     };

//     projectData.push(newSchema);
// }

// fs.writeFileSync('mockAPI.json',JSON.stringify(projectData))


// const mockAPI = require('./mockAPI')
// const names = ["Mario Speedwagon","Petey Cruiser","Anna Sthesia","Paul Molive","Anna Mull","Gail Forcewind","Paige Turner","unknown"]
// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  

// for (const item of mockAPI){
//     if(item.designer === ""){
//         item.designer = names[randomNumber(0,names.length)]
//     }
// }

// fs.writeFileSync('mockAPI.json',JSON.stringify(mockAPI))

const mockAPI = require('./mockAPI');
// const rawAPI = require('./rawAPI')

// for(let i=0;i<mockAPI.length;i++){
//   mockAPI[i].alt=rawAPI[i].alt_description;
//   mockAPI[i].avatar=rawAPI[i].user.profile_image.large;
// }

// fs.writeFileSync('mockAPI_update.json',JSON.stringify(mockAPI))
const collectionsAPI = {
  designers:{},
  topics:{},
  featured:null}


for(let item of mockAPI){
  //designers
  let designer = item.designer;
  if(!collectionsAPI.designers[designer]){
    collectionsAPI.designers[designer] = [item]
  }else{
    collectionsAPI.designers[designer].push(item)
  }

  // let topic = item.topic;
  // if(!collectionsAPI.topics[topic]){
  //   collectionsAPI.topics[topic] = [item]
  // }else{
  //   collectionsAPI.topics[topic].push(item)
  // }

  // const shuffledMock = mockAPI.sort(()=> 0.5 - Math.random());
  // collectionsAPI.featured = shuffledMock.slice(0,7)

  

  
}

//console.log(collectionsAPI)

fs.writeFileSync('collection1.json',JSON.stringify(collectionsAPI))