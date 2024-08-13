// src/components/Blogs/Blogs.jsx
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../api.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import styles from "./Blogs.module.css";
import defaultImage from "../../assets/images/default_image.webp";
import { FaHeart } from 'react-icons/fa';
import {StyledButton} from "../../styles.jsx";

const Blogs = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // Delete JWT Token
    const handleLogout = () => {
        localStorage.clear();
        navigate('/blog');
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    })

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error.message} />;
    }

    return(
        <>
            <nav className={styles.navGroup}>
                {!token ? (
                    <>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink as="button" to="#" onClick={handleLogout}>Logout</NavLink>
                        </li>
                    </>
                )}
            </nav>
            <div className={styles.blogsContainer}>
                {data.map((blog) => (
                    <div
                        key={blog._id}
                        className={styles.blogsCard}
                        onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                        {blog.image ? <img src={blog.image} alt={blog.alt} className={styles.blogsImage}/> :
                            <img src={defaultImage} alt="default Image" className={styles.blogsImage}/>}
                        <h2 className={styles.blogsTitle}><Link to={`/blog/${blog._id}`}>{blog.title}</Link></h2>
                        <div className={styles.infoContainer}>
                            <div className={styles.authorContainer}>
                                <span><strong>{blog.author.first_name} {blog.author.family_name}</strong></span>
                                <span><em>{new Date(blog.createdAt).toLocaleDateString()}</em></span>
                            </div>
                            <div className={styles.likesContainer}>
                                <FaHeart className={styles.heartIcon}/>
                                <span className={styles.likesCount}>{blog.likes?.length || 0}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Link to="/">
                    <StyledButton >Back</StyledButton>
                </Link>
            </div>
        </>
    );
};

export default Blogs;