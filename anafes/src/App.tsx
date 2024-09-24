// import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import CourseList from "./pages/courses/Courses";
import Layout from "./pages/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";


function App() {

  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CourseList />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
