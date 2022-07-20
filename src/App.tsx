import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./shared/Header/Header";

function App() {
  return (
    <>
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/month-stat" element={<MonthStat />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
