// import logo from "./logo.svg";
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScreenSizer } from "@react-three/drei";
import ExcelUpload from "./component/ExcelUpload";
import Circular from "./component/navbar/Circular/Circular";
import Navbar from "./component/navbar/Navbar";
import DataShow from "./component/datashow/DataShow";
import HorizontalScrollSection from "./component/ScrollingSection/HorizontalScrollSection";
import Footer from "./component/Footer/Footer";
import Register from "./component/login&Register/Register";
import Login from "./component/login&Register/Login";
import MainComponent from "./component/Main/MainComponent";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <MainComponent />
      <div className="cirular">
        <Circular />
      </div>
      <ExcelUpload />
      <DataShow />
      {/* <HorizontalScrollSection /> */}
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
