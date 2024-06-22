import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root.jsx';
import Blogs from "./components/Blogs/Blogs.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/blog',
        element: <Blogs />
    }

]);

export default router;