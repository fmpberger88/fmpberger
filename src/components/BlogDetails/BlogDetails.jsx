// src/components/BlogDetail/BlogDetail.jsx
import { fetchBlogById } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styles from './BlogDetails.module.css';
import defaultImage from "../../assets/images/default_image.webp";
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import AddComment from "../AddComment/AddComment.jsx";

const BlogDetails = () => {
    const { blogId } = useParams();
    const { data, error, isLoading } = useQuery({
        queryKey: ["blogId", blogId],
        queryFn: () => fetchBlogById(blogId),
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error.message} />
    }

    return (
        <div className={styles.blogDetailsContainer}>
            <h1 className={styles.blogTitle}>{data.title}</h1>
            {data.image ? (
                <img src={data.image} alt={data.title} className={styles.blogImage} />
            ) : (
                <img src={defaultImage} alt="default" className={styles.blogImage} />
            )}
            <h2 className={styles.blogAuthor}>Author: {data.author.username}</h2>
            <p className={styles.blogContent}>{data.content}</p>
            <p className={styles.blogViews}>Views: {data.views}</p>
            <p className={styles.blogCreatedAt}>Published on: {new Date(data.createdAt).toLocaleDateString()}</p>
            <h3 className={styles.blogComments}>Comments</h3>
            <AddComment />
            {data.comments.map((comment) => (
                <div key={comment._id} className={styles.comment}>
                    <p className={styles.commentText}>{comment.text}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;
