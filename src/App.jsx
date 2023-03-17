import TweetContext from "./context/TweetContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FakeTweet from "./pages/FakeTweet";
import HomePage from "./pages/HomePage";
import FakeIgPost from "./pages/FakeIgPost";
import InstagramContext from "./context/InstagramContext";

function App() {


  return (
    <div className="App flex items-center justify-center p-4">
      <BrowserRouter>
        <TweetContext>
          <InstagramContext>


            <Routes>
              <Route path="/fake-tweet" element={<FakeTweet />} />
              <Route path="/fake-instagram-post" element={<FakeIgPost />} />
              <Route path="/" exact element={<HomePage />} />
            </Routes>
          </InstagramContext>
        </TweetContext>
      </BrowserRouter>
    </div >
  )
}

export default App
