import { Route, Routes, Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { Home, RecipeDetails } from "./pages";
import { Footer, Navbar } from "./components";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
