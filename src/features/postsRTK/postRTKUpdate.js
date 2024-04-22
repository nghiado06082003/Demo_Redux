import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGetPostQuery, useUpdatePostMutation } from '../../api/apiSlice'

export const PostRTKUpdate = () => {
    const { postId } = useParams()
    const { data: post, isFetching, isSuccess } = useGetPostQuery({postId: postId})

    const [title, setTitle] = useState(isSuccess ? post.title : '')
    const [content, setContent] = useState(isSuccess ? post.content : '')

    const [updatePost, { isLoading }] = useUpdatePostMutation()

    const navigate = useNavigate()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = [title, content].every(Boolean) && !isLoading

    const onSaveClicked = async () => {
        if (canSave) {
            try {
                await updatePost({ postId: postId, title: title, content: content }).unwrap()
                setTitle('')
                setContent('')
            }
            catch (err) {
                console.error('Failed to save the post: ', err)
            }
            finally {
                navigate("/postsRTK")
            }
        }
    }

    return (
        <div className='container-md'>
            <h2>Cập nhật bài đăng</h2>
            <form>
                <div className='row justify-content-center'>
                    <div className='col-auto'>
                        <label for="postTitle" className="form-label">Tiêu đề mới:</label>
                        <input
                            type="text"
                            className='form-control'
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-auto'>
                        <label for="postContent" className="form-label">Nội dung bài đăng mới:</label>
                        <textarea
                            className='form-control'
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={onContentChanged}
                        />
                    </div>
                </div>
            </form>
            <div className='row justify-content-center'>
                <div className='col-auto'>
                    <button className="btn btn-primary" onClick={onSaveClicked}>Lưu!</button>
                </div>
            </div>
        </div>
    )
}