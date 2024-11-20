import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Movie from "./components/Movie";  // Đảm bảo rằng đường dẫn này là chính xác

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Đường dẫn chính */}
        <Route path="/" element={<Movie />} />

        {/* Thêm route redirect nếu cần */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
