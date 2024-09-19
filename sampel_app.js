import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <Authenticator>
          {({ signOut }) => (
            <div className="auth-container">
              <header className="App-header" style={{ backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
                <h1 style={{ fontSize: '4rem', color: '#61dafb' }}>Welcome Cloud Guru</h1>
                <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>Explore the world of cloud computing with these resources:</p>
                
                <nav style={{ marginTop: '30px' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '10px 0' }}>
                      <a 
                        className="App-link"
                        href="https://github.com/jeet-code"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#61dafb', fontSize: '1.2rem', textDecoration: 'none' }}
                      >
                        GitHub Profile
                      </a>
                    </li>
                    <li style={{ margin: '10px 0' }}>
                      <a 
                        className="App-link"
                        href="https://infraboy.hashnode.dev/series/aws"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffcc00', fontSize: '1.2rem', textDecoration: 'none' }}
                      >
                        AWS Series on Hashnode
                      </a>
                    </li>
                    <li style={{ margin: '10px 0' }}>
                      <a 
                        className="App-link"
                        href="https://www.youtube.com/@cloudguru2023"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ff0000', fontSize: '1.2rem', textDecoration: 'none' }}
                      >
                        Cloud Guru YouTube Channel
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              
              <main>
                <p>You are logged in!</p>
                <button
                  onClick={signOut}
                  className="sign-out-button"
                  style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
                >
                  Log Out
                </button>
              </main>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
}

export default App;
#after this if not works thn run only -- > 
  npm install aws-amplify
npm install @aws-amplify/ui-react
npm start

