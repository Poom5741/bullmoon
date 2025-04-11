import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import HomeV2 from "./pages/HomeV2";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeV2 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
