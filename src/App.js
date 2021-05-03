import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import MainPage from "./pages/MainPage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from "./compenents/Layout"
import { makeStyles } from '@material-ui/core';
import Coordinator from './compenents/Dashboard/Coordinator';
import { useState,useEffect } from 'react';
import Create from "./pages/Create"
import Login from './pages/Login';
function App() {
  const [loading,setLoading]=useState(false);
  const [user,setUser]=useState({})
  
   useEffect(async()=>{
   await fetch("http://localhost:8000/users").
  then(res=>res.json())
  .then(data=>{
      setUser({username:data[0].username,img:data[0].img});
  })
  },[])
  function printMousePos(event) {
   
   
console.log(event.clientX,event.clientY);
  }
  document.addEventListener("click",printMousePos)
 

  return (
    <div className="App"  >
      <Router>
      <Layout user={user}>
        <Switch>
          {/* <Route exact path="/"><MainPage loading={loading}/></Route> */}
          <Route exact path="/"><Login loading={loading}/></Route>
          <Route  path="/dashboard"><Dashboard loading={loading} user={user}/></Route>
          <Route  path="/create"><Create loading={loading} user={user}/></Route>
        </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
