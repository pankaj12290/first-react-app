import React from 'react';
import Catalog from './Catalog';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import ReduxExample from "./ReduxExample";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoApp from './ToDoApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faKey, faCheck } from '@fortawesome/free-solid-svg-icons';
import Github from './Github';


library.add(faTrash, faKey, faCheck);

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/catalog' element={<Catalog />} />
          <Route exact path='/todo' element={<ToDoApp />} />
          <Route exact path='/redux' element={<ReduxExample />} />
          <Route exact path='/github' element={<Github />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
