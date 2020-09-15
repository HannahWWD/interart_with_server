import React,{useState,useEffect} from 'react';
import './App.scss';
import './components/Sidebar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import ResetScroll from './components/ResetScroll';
import Home from './pages/Home';
import Article from './pages/Article';
import All from './pages/All';
import NewPost from './pages/NewPost';
import MyArchive from './pages/MyArchive';
import Collection from './pages/Collection';
import MyPosts from './pages/MyPosts';


function App(){
  
  const[data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(
        'http://localhost:5000/api/collection',
      );

      try {
        const result = await request.json();
        setData(result)
        return result;
      } catch (error) {
        console.log(error)
      }

    }

    fetchData();
  }, []);

  const [tab, setTab] = useState("featured");
  const getTabName = (tabName) => {
    setTab(tabName)    
  }



  return (
    <div className="App">
     
      <BrowserRouter>
        <Sidebar getTabName={getTabName}/>
        <Navbar />
        <ResetScroll />
       
        <Route exact path="/" render={()=>(<Home data={data[tab]} tab={tab} />)}/> 
        <Route path="/article" component={Article}/> 
        <Route path="/all" component={All}/>
        <Route path="/new-post" component={NewPost}/>
        <Route path="/archive" component={MyArchive}/>
        <Route path="/collection" component={Collection}/>
        <Route path="/my-posts" component={MyPosts}/>
      

      </BrowserRouter>

    
    </div>
  );
}

export default App;
