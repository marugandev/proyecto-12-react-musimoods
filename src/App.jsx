import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/pages/Home/Home";
import MoodSongs from "./components/pages/MoodSongs/MoodSongs";
import Favourites from "./components/pages/Favourites/Favourites";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/moodSongs" element={<MoodSongs />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
