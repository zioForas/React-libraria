import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
         <Route path="/" exact component={Home}/> 
         <Route path="/books" exact component={Books}/>
        {/* <Route path="/" exact render={() => <Home books={Books} />} />
        <Route path="/books" exact render={() => <Books books={Books} />} />  */}


        {/* <Route path="/books/:id" element={<BookInfo books={books} 
        addToCart={addToCart} cart={cart}/> } />
        <Route path="/cart" element={<Cart books={books} cart={cart} 
        changeQuantity={changeQuantity} />} /> */}
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
