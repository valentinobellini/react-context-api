import axios from "axios";
import { useState, useEffect } from "react";

// importo elementi react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // importa componenti
// import Header from './components/Header'
// import Footer from './components/Footer'

// importa layout
import MainLayout from './layouts/MainLayout'

// importa il provider
import GlobalContext from './contexts/GlobalContext';


// importa pagine
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import PostDetailPage from './pages/PostDetailPage'


function App() {

  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    axios.get("http://localhost:3000/posts/")
      .then((res) => setPosts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(fetchPosts, [])




  return (
    <>
      <GlobalContext.Provider value={{ posts }}>
        <Router>
          <Routes>
            <Route element={<MainLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path='/posts'>
                <Route index element={<PostsPage />} />
                <Route path=':id' element={<PostDetailPage />} />
              </Route>
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </>
  )
}

export default App
