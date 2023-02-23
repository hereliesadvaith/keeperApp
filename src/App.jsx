import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListNotes from "./components/ListNotes";
import NewNote from "./components/NewNote";

function App() {
  return (
    <div>
      <Header />
      <NewNote />
      <ListNotes />
      <Footer />
    </div>
  )
}
export default App;
