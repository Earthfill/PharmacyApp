import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import About from "./pages/About";
import Review from "./pages/Review";
// import Report from "./pages/Report";
import Ratings from "./pages/Ratings";
import Signin from "./pages/Signin";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/error' element={<Error />} />
        <Route path='/about/:uniqueGuid' element={<About />} />
        <Route path='/about/review/:uniqueGuid' element={<Review />} />
        {/* <Route path='/about/pages/report/:id' element={<Report />} /> */}
        <Route path='/about/ratings/:uniqueGuid' element={<Ratings />} />
        <Route path='/admin/signin' element={<Signin />} />
        <Route path='/admin/user' element={<User />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
