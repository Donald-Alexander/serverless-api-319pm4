    import logo from './logo.svg';
    import './App.css';
    import React, { useState, useEffect } from 'react'

    import NavBar from './components/NavBar';
    import PublicHome from './components/PublicHome';
    import PrivateHome from './components/PrivateHome';


    function App() {

      const [name, setName] = useState('');
      const [message, setMessage] = useState('');

      const [isAuthenticated, userHasAuthenticated] = useState(false);
      const [user, setUser] = useState(null);

    
      useEffect(() => {
        getUserInfo();
      }, []);

      async function getUserInfo() {
        try {

          const response = await fetch("http://localhost:4280/.auth/me");
          const payload = await response.json();
          console.log("payload : ", payload);
          const { clientPrincipal } = payload;

          if (clientPrincipal) {
            setUser(clientPrincipal);
            userHasAuthenticated(true);
            console.log(`clientPrincipal = ${JSON.stringify(clientPrincipal)}`);
          }

        } catch (error) {
          console.log('No profile could be found');
        }
      };

      return (
        <div className="App">
          <NavBar user={user}/>
          <main className="column">
            { isAuthenticated ? <PrivateHome user={user}/> : <PublicHome /> }
          </main>
        </div> 
      );
    }

    export default App;
