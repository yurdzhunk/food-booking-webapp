import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { Provider } from 'react-redux';
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
