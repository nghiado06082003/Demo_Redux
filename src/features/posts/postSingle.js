import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchPost } from './postsSlice'

export const PostSingle = () => {
    const { postId } = useParams()
    const post = useSelector(state => state.posts.current_post)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost(postId))
    }, [dispatch])

    let content = null
    if (post == {}) {
        content = (
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Đang tải nội dung...</span>
            </div>
        )
    }
    else {
        content = (
            <div className='container-md'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    }

    return content
}