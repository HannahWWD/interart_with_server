import React,{useState, useEffect} from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isScrolled, setIsScroll] = useState(false);
    const [isClicked,setIsClicked] = useState(false);
    
    function changeBackground(){
        if(window.scrollY>200){
            setIsScroll(true);
        }else{
            setIsScroll(false);
        }
       
    }

    function toggleMenu(){
        isClicked ? setIsClicked(false):setIsClicked(true)

    }

    const menuVis={visibility:"hidden"};

    useEffect(()=>{
        window.addEventListener("scroll",changeBackground);
        return ()=> window.removeEventListener("scroll",changeBackground)
    })


    return (
        <div className={isScrolled ? "navbar-customized nav-scrolled":"navbar-customized"}>
        <div className="inner-container">
        <form autoComplete="off" onSubmit={(e)=>{e.preventDefault()}}>
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.1301 19.0993C22.9842 16.7279 23.8636 13.7385 23.5889 10.7409C23.3143 7.74333 21.9063 4.96348 19.6522 2.96852C17.3981 0.973555 14.4678 -0.086192 11.4591 0.00548867C8.45044 0.0971693 5.59009 1.33337 3.46166 3.46188C1.33323 5.59038 0.0971032 8.4508 0.00548168 11.4595C-0.0861398 14.4683 0.973646 17.3986 2.96862 19.6527C4.9636 21.9068 7.74343 23.3147 10.741 23.5893C13.7385 23.8639 16.7279 22.9844 19.0991 21.1303L24.5441 26.5751C24.6773 26.7094 24.8357 26.8161 25.0101 26.889C25.1846 26.9619 25.3718 26.9996 25.5609 27C25.75 27.0004 25.9373 26.9634 26.1121 26.8912C26.2869 26.819 26.4457 26.7131 26.5794 26.5793C26.7131 26.4456 26.8191 26.2868 26.8913 26.112C26.9634 25.9372 27.0004 25.7499 27 25.5608C26.9996 25.3717 26.9619 25.1845 26.8889 25.0101C26.816 24.8356 26.7094 24.6772 26.5751 24.5441L21.1301 19.0993ZM11.8391 20.7662C10.0735 20.7662 8.34756 20.2427 6.87949 19.2618C5.41142 18.2809 4.26719 16.8867 3.5915 15.2554C2.9158 13.6242 2.739 11.8292 3.08343 10.0975C3.42786 8.36581 4.27807 6.77512 5.52653 5.52661C6.77499 4.27811 8.36564 3.42786 10.0973 3.08339C11.829 2.73892 13.6239 2.9157 15.2552 3.59137C16.8864 4.26704 18.2806 5.41126 19.2615 6.87934C20.2424 8.34741 20.766 10.0734 20.766 11.839C20.7634 14.2058 19.822 16.4749 18.1485 18.1485C16.4749 19.8221 14.2059 20.7635 11.8391 20.7662V20.7662Z" fill="#BDBDBD" />
            </svg>

            <input type="text" placeholder="this is a mock search bar" name="search" id="search" />
        </form>
            
            <div className="menu-container">
                <div onClick={toggleMenu} className="nav-avatar"></div>
                <div style={!isClicked? menuVis:null}>
                    <Link to="/my-posts">My Posts</Link>
                    <Link to="/archive">My Archives</Link>
                    <Link to="#">Setting</Link>
                    <button type="button">Log Out</button>
                </div>
            </div>

            <Link to="/new-post"><svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8625 0.462524C33.651 0.46422 33.4488 0.5496 33.3 0.7L13.5 20.5C13.39 20.6135 13.3161 20.7571 13.2876 20.9125L12.15 26.5626C12.1228 26.6919 12.128 26.826 12.1652 26.9529C12.2025 27.0798 12.2706 27.1954 12.3635 27.2895C12.4563 27.3836 12.5711 27.4533 12.6974 27.4922C12.8238 27.5311 12.9578 27.5381 13.0876 27.5126L18.75 26.375C18.9055 26.3465 19.049 26.2726 19.1625 26.1626L38.9625 6.36252C39.0377 6.28812 39.0974 6.19956 39.1382 6.10193C39.1789 6.0043 39.1999 5.89956 39.1999 5.79377C39.1999 5.68799 39.1789 5.58325 39.1382 5.48562C39.0974 5.38799 39.0377 5.2994 38.9625 5.225L34.4376 0.7C34.3241 0.589963 34.1805 0.516032 34.025 0.4875C33.9719 0.473675 33.9174 0.465359 33.8625 0.462695V0.462524ZM33.8749 2.4L37.2624 5.7875L18.1999 24.8375L13.9624 25.7L14.7999 21.475L33.8749 2.4V2.4ZM2.00005 25.1375C1.33733 25.1375 0.800049 25.6748 0.800049 26.3375C0.800049 27.0002 1.33733 27.5375 2.00005 27.5375H9.20005C9.86277 27.5375 10.4 27.0002 10.4 26.3375C10.4 25.6748 9.86277 25.1375 9.20005 25.1375H2.00005V25.1375Z" fill="#FFFFF8" />
            </svg>
            </Link>
        </div>


        </div>
    )
}

export default Navbar


