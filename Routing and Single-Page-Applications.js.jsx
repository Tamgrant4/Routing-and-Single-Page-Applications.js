import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Comic Book Library!</h2>
    </div>
  );
};

export default Home;

import React from 'react';

const Comics = () => {
  return (
    <div>
      <h2>Comics</h2>
      <p>This component is under construction. Check back later!</p>
    </div>
  );
};

export default Comics;

import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
  const characters = [
    { id: 1, name: 'Spider-Man' },
    { id: 2, name: 'Iron Man' },
  ];

  return (
    <div>
      <h2>Browse Characters</h2>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;

import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Character Details</h2>
      <p>Character ID: {id}</p>
    </div>
  );
};

export default CharacterDetails;

import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/characters" activeClassName="active">Browse Characters</NavLink></li>
        <li><NavLink to="/comics" activeClassName="active">Comics</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
