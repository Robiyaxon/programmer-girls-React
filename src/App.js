import React from "react";
import "./App.css";
import Category from "./Components/category/Category";
import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BackToTop } from "./BackToTop";
function App() {
  return (
    <div className='App' >
      <Header />
      <BackToTop />
      <Category />
      <Footer />
    </div>
  );
}
export default App;



 