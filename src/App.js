import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/Authentication.component';
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';

const Shop = () => {
  return (
    <h1>Shop Page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
    
  );
}

export default App;
