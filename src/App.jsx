import {
  Route,
  Routes,
} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import TeachersPage from "./pages/TeachersPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

import "./styles/common.css";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          >
            Home
          </Route>
          <Route
            path="/teachers"
            element={<TeachersPage />}
          >
            Home
          </Route>
          <Route
            path="/favorites"
            element={<FavoritesPage />}
          >
            Home
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
