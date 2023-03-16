import EditTool from "./components/EditTool"
import TweetTemp from "./components/TweetTemp"
import TweetContext from "./context/TweetContext"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FakeTweet from "./pages/FakeTweet";
import HomePage from "./pages/HomePage";

function App() {


  return (
    <div className="App flex items-center justify-center p-4">
      <BrowserRouter>
        <TweetContext>



          <Routes>
            <Route path="/fake-tweet" element={<FakeTweet />} />
            <Route path="/" exact element={<HomePage />} />
          </Routes>

        </TweetContext>
      </BrowserRouter>
    </div >
  )
}

export default App
