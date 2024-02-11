import Admin from "./admin/page/Admin";
import Service from "./admin/page/Service";
import Staff from "./admin/page/Staff";
import News from "./admin/page/News";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testimony from "./admin/page/Testimony";


function App() {
  return (
    <div>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/service" element={<Service />} />
        <Route path="/admin/staff" element={<Staff />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/testimony" element={<Testimony />} />
      </Routes>
    </BrowserRouter>    </div>
  );
}

export default App;
