import { Routes, Route } from "react-router-dom"
import Error from "./pages/Error";
import About from "./pages/About";
import Review from "./pages/Review";
import Report from "./pages/Report";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/error' element={<Error />} />
        <Route path='/:uniqueGuid' element={<About />} />
        <Route path='/about/review/:uniqueGuid' element={<Review />} />
        <Route path='/about/report/:id' element={<Report />} />
      </Routes>
    </div>
  )
}

export default App