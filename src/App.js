import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './routes/home/Home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h2>Navigation</h2>
        <Outlet />
      </div>
    </div>
  )
}

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
      </Route>
    </Routes>
    
  );
}

export default App;
