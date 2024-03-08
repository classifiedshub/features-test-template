import { Box } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Home from "./pages/home/Index";
const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
