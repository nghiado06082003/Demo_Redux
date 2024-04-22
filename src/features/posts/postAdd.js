import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAdd } from './postsSlice'

export const PostAdd = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = [title, content].every(Boolean) && addRequestStatus === 'idle'

    const onSaveClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                let newpost = await dispatch(postAdd({ title: title, content: content })).unwrap()
                setTitle('')
                setContent('')
                setAddRequestStatus('idle')
                return navigate("/posts")
            }
            catch (err) {
                console.error('Failed to save the post: ', err)
                setAddRequestStatus('idle')
                return navigate("/posts")
            }
            
        }
    }

    return (
        <div className='container-md'>
            <h2>Thêm một bài đăng</h2>
            <form>
                <div className='row justify-content-center'>
                    <div className='col-auto'>
                        <label for="postTitle" className="form-label">Tiêu đề:</label>
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
                        <label for="postContent" className="form-label">Nội dung bài đăng:</label>
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