import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export default function PostDetail() {

    // destruttura per ritornare l'id (proprietà id dell'oggetto params)
    const { id } = useParams();

    //  setta stato del componente
    const [post, setPost] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPosts() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPosts(),
        [id])


    return (
        <>
            <nav>
                <Link to={`/posts/${parseInt(id) - 1}`}>Prev</Link>
                <Link to={`/posts/${parseInt(id) + 1}`}>Next</Link>
            </nav>

            <div className="detail-container">
                <h3>{post.title}</h3>
                <p className="content">{post.content}</p>
                <div className="post-lower-wrapper">
                    <span>Autore: {post.author}</span>
                    <span className="category">Categoria: {post.category}</span>
                </div>
            </div>
        </>
    );
}