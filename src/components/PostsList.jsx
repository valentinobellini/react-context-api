import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    function fetchPosts() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => setPosts(res.data))
            .catch(err => console.log(err));
    };

    useEffect(fetchPosts, [])

    return (
        <div className="public-posts">
            {posts.length === 0 ?
                <p className="empty-message">Nessun post disponibile</p>
                :
                <ul className="posts-list">
                    {posts.map((post) => (
                        <li className="post" key={post.id}>
                            <h3>{post.title}</h3>
                            <p className="content">{post.content}</p>
                            <div className="post-lower-wrapper">
                                <span>Autore: {post.author}</span>
                                <span className="category">Categoria: {post.category}</span>
                            </div>
                            <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

