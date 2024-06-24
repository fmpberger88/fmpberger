// src/components/Blogs/Blogs.jsx
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../api";
import { useQuery } from "@tanstack/react-query";
import styles from './Blogs.module.css';
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const Blogs = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error.message} />;
    }

    return (
        <div className={styles.blogsContainer}>
            <h1 className={styles.blogTitle}>fmpberger's Blogs</h1>
            {data.map(blog => (
                <div key={blog._id} className={styles.blogItem}>
                    <Link to={`/blog/${blog._id}`} className={styles.blogLink}>{blog.title}</Link>
                    <p className={styles.blogContent}>{blog.content.substring(0, 100)}...</p>
                </div>
            ))}
            <Link to="/" className={styles.goBackLink}>Go back</Link>
        </div>
    );
}

export default Blogs;
