import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import GamePage from "./pages/game-page/game-page";
import Header from "./components/header/Header";
import { store } from "./redux";
import OrderPage from "./pages/order-page/order-page";

function App() {
  return (
    <Provider store={store} >
      <Router>

        <div className="App">

          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>

        </div>

      </Router>

    </Provider>

  );
}

export default App;
