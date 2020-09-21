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
import MobileNav from './components/MobileNav';
import StickyBtn from './components/StickyBtn';
import DevNote from './components/DevNote';


function App(){
  
  const[data,setData] = useState(null);
  const [tab, setTab] = useState("featured");

  // fetch collection data
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(
        '/api/collection',
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


 // get active tab from sidebar
  const getTabName = (tabName) => {
    setTab(tabName)
  }

  // maintain active tab state after page reload
  useEffect(() => {
    setTab(localStorage.getItem('tabName')||
    "featured")
    }, [])

  useEffect(() => {
    localStorage.setItem("tabName", tab)
  }, [tab])


  return (
    <div className="App">
     
      <BrowserRouter>
        <DevNote />
        <MobileNav getTabName={getTabName} />
        <Sidebar getTabName={getTabName} activeTab={tab}/>
        <Navbar />
        <StickyBtn />
        <ResetScroll />
       
        <Route exact path="/" render={()=>(data && <Home data={data[tab]} tab={tab} />)}/> 
        <Route path="/article/:id" component={Article}/> 
        <Route path="/all/:type" render={(props)=>(data && <All data={data[tab]} browserProps={props}/>)}/>
        <Route path="/new-post" render={()=>(<NewPost getTabName={getTabName} />)}/>
        <Route path="/archive" component={MyArchive}/>
        <Route path="/collection/:name" render={(props)=>(data && <Collection data={data[tab]} browserProps={props}/>)}/> 
        <Route path="/my-posts" component={MyPosts}/>
      

      </BrowserRouter>

    
    </div>
  );
}

export default App;
