import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Album from "./routes/Album/album";
import SingleAlbum from "./routes/Album/singleAlbum";
import CreateAlbum from "./routes/Album/createAlbum";
import EditAlbum from "./routes/Album/editAlbum";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/albums" element={ <Album/> } />
          <Route path="/albums/:slug" element={ <SingleAlbum/> } />
          <Route path="/createalbum" element={ <CreateAlbum/> } />
          <Route path="/editalbum/:slug" element={ <EditAlbum/> } />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App