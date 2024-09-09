import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
    return (
      <div>
        <h2>Welcome to the Comic Book Library!</h2>
      </div>
    );
  };
  
  const Comics = () => {
    return (
      <div>
        <h2>Comics</h2>
        <p>This component is under construction. Check back later!</p>
      </div>
    );
  };
  
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
      </Routes>
    </Router>
  );
}

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

import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
  const characters = [ { id: 1, name: 'Spider-Man' }, { id: 2, name: 'Iron Man' } ];
  
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

const NotFound = () => {
    return (
      <div>
        <h2>404 - Page Not Found</h2>
      </div>
    );
  };
  
  import NotFound from './components/NotFound';

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
