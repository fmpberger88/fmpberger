import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import styles from './AddComment.module.css';
import {useState} from "react";

// const API_URL = 'http://localhost:5001/api/v1';
const API_URL = 'https://blog-api-t6tp.onrender.com/api/v1'

const AddComment = () => {
    const { blogId } = useParams();
    const [text, setText] = useState("");
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newComment) => axios.post(`${API_URL}/comments/${blogId}`, newComment),
        onSuccess: () => {
            queryClient.invalidateQueries("blogId", blogId);
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await mutation.mutateAsync({ text });
        setText("");
    };

    return (
        <div className={styles.addCommentContainer}>
            <form onSubmit={handleSubmit} className={styles.addCommentForm}>
                <textarea
                    className={styles.addCommentTextarea}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Write a comment..."
                    required
                    minLength={5}
                />
                <button type="submit" className={styles.addCommentButton}>Submit</button>
            </form>
        </div>
    )
}

export default AddComment;