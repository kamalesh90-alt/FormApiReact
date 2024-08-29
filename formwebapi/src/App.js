// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetReservation from './Components/GetReservation';
import BookTickets from './Pages/BookTickets';
import GetReservationsById from './Pages/GetReservationsById';
import UpdateReservation from './Pages/UpdateReservation';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">My Reservations App</a>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<GetReservation />} />
            <Route path="/book-tickets" element={<BookTickets />} />
            <Route path="/reservation-details" element={<GetReservationsById />} />
            <Route path="/update-reservation/:id" element={<UpdateReservation />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
