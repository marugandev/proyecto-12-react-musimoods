import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home/Home";
import Songs from "./pages/Songs/Songs";
import Favourites from "./pages/Favourites/Favourites";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/songs/:moodName" element={<Songs />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
