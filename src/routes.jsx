import { createHashRouter } from 'react-router-dom';
import Root from './components/Root.jsx';
import Blogs from "./components/Blogs/Blogs.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Tools from "./components/Tools/Tools.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ContactFormular from "./components/ContactFormular/ContactFormular.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/blog',
        element: <Blogs />
    },
    {
        path: '/blog/:blogId',
        element: <BlogDetails />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/tools',
        element: <Tools />
    },
    {
        path: 'projects',
        element: <Projects />
    },
    {
        path: 'contact',
        element: <ContactFormular />
    }
]);

export default router;
