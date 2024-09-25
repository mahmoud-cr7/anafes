import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import CourseList from "./pages/courses/Courses";
import Layout from "./pages/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/login";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
            <Nav />
          <Routes>
            {/* Login page */}
            <Route path="/" element={<Login />} />
            {/* Layout with nested routes */}
            <Route path="/layout" element={<Layout />}>
              {/* Nested routes rendered inside Layout */}
              <Route path="courses" element={<CourseList />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
