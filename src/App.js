import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/User/Profile';
import MembersList from './components/User/MembersList';
import EventList from './components/Event/EventList';
import CreateEvent from './components/Event/CreateEvent';
import EventDetail from './components/Event/EventDetail';
import RegisterEvent from './components/Event/RegisterEvent';
import Footer from './components/Shared/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/events" exact element={<EventList />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/:id/register" element={<RegisterEvent />} />
        <Route path="/" exact element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
