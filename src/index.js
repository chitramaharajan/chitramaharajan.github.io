import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import RegistrationForm from "./components/Form";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import store from "./components/store";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import HomePageBesant from "./components/HomePageBesant";
import TraineeDetails from "./components/TraineeDetails";
import MyHomePage from "./components/MyHomePage";
import About from "./components/About";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/fruitshome" element={<HomePage />}></Route>
        <Route path="/besant" element={<HomePageBesant />}></Route>
        <Route path="/traineedetails" element={<TraineeDetails />}></Route>
        <Route path="/myhomepage" element={<MyHomePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
