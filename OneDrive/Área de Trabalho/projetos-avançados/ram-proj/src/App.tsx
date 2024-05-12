import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Table from "./components/pages/Table"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Table/>
      <Box bgcolor="#E1B15C" px={2} py={1}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/example" element={#} /> */}
        </Routes>
      </Box>
      <Footer />
    </>
  );
}


export default App;
