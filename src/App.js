import React from 'react'
import Header from "./components/header/Header.jsx"
import "./components/header/Header.css"
import './App.css';
import RecommendedCategory from "./components/recommended-category/RecommendedCategory.jsx";
import Login from "./components/login/Login.jsx";
import AlgebraShop from "./components/algebra-shop/AlgebraShop.jsx";
import ShoppingBag from "./components/shopping-bag/ShoppingBag.jsx";
import Finish from "./components/finish/Finish.jsx";
import Category from "./components/category/Category.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Component } from "react";
import {auth} from "./firebase-config"
import {category_data} from "./database.js"

export class App extends Component {

  unsubscribeFromAuth = null; 

  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  } 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { 
      const localUser = user;
      this.setState({currentUser: localUser});
      if (user) {localStorage.setItem("user", localUser);};
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header docs={this.state.currentUser}/>
          <div className="content">
            <Routes>
              <Route path="/" element={<RecommendedCategory />}/>
              <Route path="/Login" element={<Login />}/>
              <Route path="/Hats" element={<Category category = {category_data.hats}/>}/>
              <Route path="/Jackets" element={<Category category = {category_data.jackets}/>}/>
              <Route path="/Sneakers" element={<Category category = {category_data.sneakers}/>}/>
              <Route path="/Womens" element={<Category category = {category_data.womens}/>}/>
              <Route path="/Mens" element={<Category category = {category_data.mens}/>}/>
              <Route path="/AlgebraShop" element={<AlgebraShop />}/>
              <Route path="/ShoppingBag" element={<ShoppingBag />}/>
              <Route path="/Finish" element={<Finish />}/>
            </Routes>
          </div>  
        </div>
      </Router>
    );    
  }

}

export default App;
