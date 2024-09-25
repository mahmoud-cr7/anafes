import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import CourseList from "./pages/courses/Courses";
import Layout from "./pages/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/login";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            {/* Public Route: Login */}
            <Route path="/" element={<Login />} />

            {/* Protected Routes */}
            <Route path="/layout" element={<ProtectedRoute />}>
              <Route path="" element={<Layout />}>
                {/* Nested routes rendered inside Layout */}
                <Route path="courses" element={<CourseList />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
