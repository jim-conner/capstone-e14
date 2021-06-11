import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const [sites, setSites] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInState) => {
      if (userInState) {
        const userInfoObject = {
          fullName: userInState.displayName,
          uid: userInState.uid,
          userName: userInState.email.split('@')[0]
        };
        setUser(userInfoObject);
        console.warn('get request here, logged in');
        // getSites(userInState.uid).then((sitesArray) => setSites(sitesArray))
      } else if (user || user === null) {
        console.warn('not logged in', sites);
        setUser(false);
        setSites([]);
      }
    });
  }, []);
  return (
    <div className='App'>
      <Router>
        <NavBar user={user}/>
        {/* <Routes/> */}
        <Jumbo/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
