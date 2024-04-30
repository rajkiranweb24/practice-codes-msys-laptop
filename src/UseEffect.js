import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostsComponent = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    function deletePostBydID(id) {

        const filteredPosts = data.filter((perticularPosts) => {
            return perticularPosts.id !== id
        })
        console.log(filteredPosts)
        setData(filteredPosts)

    }

    async function getPostData(id) {

        // const postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // const post = await postData.json()
        // console.log("post", post)

        navigate(`/post/${id}`)



    }


    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const fetchedData = await data.json()
        console.log(fetchedData)
        setData(fetchedData)

    }
    useEffect(() => {

        fetchData()

    }, [])
    { data.length === 0 && <h1>No data found</h1> }
    console.log(data)
    return (
        <div>
            {
                data.map((post) => {
                    return (
                        <div style={{ border: "2px solid green", margin: "2px" }}>
                            <h1 onClick={() => getPostData(post.id)}>{post.title}-{post.id}</h1>
                            <h2>{post.body}</h2>
                            <button onClick={() => { deletePostBydID(post.id) }} style={{ backgroundColor: "red", border: "none", padding: "5px", color: "white" }}>Delete Post</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostsComponent