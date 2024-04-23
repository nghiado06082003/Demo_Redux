import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetPostsQuery } from '../../api/apiSlice'
import classnames from 'classnames'

export const PostsRTKList = () => {
    const {
        data: posts,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetPostsQuery()

    let content = null

    if (isLoading) {
        content = (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Đang tải nội dung...</span>
            </div>
        )
    }
    else if (isSuccess) {
        let pre_content = (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Mã bài đăng</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr>
                            <th>{post.id}</th>
                            <td>{post.title}</td>
                            <td>
                                <Link to={`/postsRTK/${post.id}`} className='btn btn-primary'>Xem chi tiết</Link>
                                <Link to={`/postsRTK/update/${post.id}`} className='btn btn-warning mx-2'>Cập nhật nội dung</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
        const containerClassname = classnames('posts-container', {
            disabled: isFetching
        })
        content = <div className={containerClassname}>{pre_content}</div>
    }
    else if (isError) {
        content = <h6 class="text-danger">{error.toString()}</h6>
    }

    return (
        <div className='container-md'>
            <h2>Danh sách bài đăng - dùng RTK query </h2>
            <div className='row'>
                <div className='col-auto'>
                    <Link className='btn btn-primary' to="/postsRTK/add">Thêm bài đăng mới</Link>
                    <button className='btn btn-primary mx-2' onClick={refetch}>Tải lại bài đăng</button>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col'>
                    {content}
                </div>
            </div>
        </div>
    )
}