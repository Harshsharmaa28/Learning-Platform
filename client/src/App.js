import About from "./pages/AboutUs/About";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./pages/ContactUs/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Scholarship from "./pages/Scholarship/Scholarship";
import Faqs from "./pages/Faqs/Faqs";
import Mentors from "./pages/Mentors/Mentors";
import SignIn from "./pages/Auth/SignIn";
import SignUp1 from "./pages/Auth/SignUp1";
import SignUp2 from "./pages/Auth/SignUp2";

function App() {
  const links = [
    {
      path: "/about",
      element: <About />,
      id: 1,
    },
    {
      path: "/footer",
      element: <Footer />,
      id: 2,
    },
    {
      path: "/contact",
      element: <Contact />,
      id: 3,
    },
    {
      path: "scholarship",
      element: <Scholarship />,
      id: 4,
    },
    {
      path: "/faqs",
      element: <Faqs />,
      id: 5,
    },
    {
      path: "/Mentors",
      element: <Mentors />,
      id: 6,
    },
    {
      path: "/",
      element: <Homepage />,
      id: 7,
    },
    {
      path: "/login",
      element: <SignIn />,
      id: 8,
    },
    {
      path: "/signup",
      element: <SignUp1 />,
      id: 9,
    },
    {
      path: "/signup2",
      element: <SignUp2 />,
      id: 10,
    },
  ];
  return (
    <div>
      <Routes>
        {links.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
