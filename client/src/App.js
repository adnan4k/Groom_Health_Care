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
import Appointment from "./pages/Appointment";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AppointmentTable from "./admin/tables/AppointmentTable";
import NewsDetail from "./pages/NewsDetail";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import StaffPage from "./pages/StaffPage";
import ContactPage from "./pages/ContactPage";
import VisionMission from "./components/VisionMission";
import Subscription from "./sections/Subscription";


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
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/news-detail" element={<NewsDetail/>} />
        <Route path="/appointment-details" element={<AppointmentTable/>} />
        <Route path="/staff" element={<StaffPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/mission-vision" element={<VisionMission/>} />
        <Route path="/subscription" element={<Subscription/>} />
      </Routes>
    </BrowserRouter>    </div>
  );
}

export default App;
