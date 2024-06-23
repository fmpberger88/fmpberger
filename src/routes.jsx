import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root.jsx';
import Blogs from "./components/Blogs/Blogs.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";


const router = createBrowserRouter([
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
    }

]);

export default router;