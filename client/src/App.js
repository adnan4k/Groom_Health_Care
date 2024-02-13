import Admin from "./admin/page/Admin";
import Service from "./admin/page/Service";
import Staff from "./admin/page/Staff";
import News from "./admin/page/News";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testimony from "./admin/page/Testimony";
import NewsTables from "./admin/tables/NewsTable";
import StaffTable from "./admin/tables/StaffTable";
import TestimonyTable from "./admin/tables/TestimonyTable";
import ServiceTable from "./admin/tables/ServiceTable";


function App() {
  return (
    <div>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/admin/service" element={<Service />} />
        <Route path="/admin/staff" element={<Staff />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/testimony" element={<Testimony />} />
        <Route path="/admin/news/display" element={<NewsTables/>} />
        <Route path="/admin/staff/display" element={<StaffTable/>} />
        <Route path="/admin/testimony/display" element={<TestimonyTable/>} />
        <Route path="/admin/service/display" element={<ServiceTable/>} />
      </Routes>
    </BrowserRouter>    </div>
  );
}

export default App;
