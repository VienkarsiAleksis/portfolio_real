import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/index.js";
import WorkPage from "./WorkPage/index.js";
import ReviewPage from "./ReviewPage/index.js";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);