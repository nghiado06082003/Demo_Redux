import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from './postsSlice'

export const PostsList = () => {
	const posts = useSelector(state => state.posts.posts)
	const postStatus = useSelector(state => state.posts.status)
	const error = useSelector(state => state.posts.error)

	const dispatch = useDispatch()

	useEffect(() => {
		if (postStatus === 'idle') {
			dispatch(fetchPosts())
		}
	}, [postStatus, dispatch])

	let content = null

	if (postStatus === 'loading') {
		content = (
			<div class="spinner-border text-primary" role="status">
				<span class="visually-hidden">Đang tải nội dung...</span>
			</div>
		)
	}
	else if (postStatus === 'succeeded') {
		content = (
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Mã bài đăng</th>
						<th scope="col">Tiêu đề</th>
					</tr>
				</thead>
				<tbody>
					{posts.map(post => (
						<tr>
							<th>{post.id}</th>
							<td>{post.title}</td>
							<td>
                                <Link to={`/posts/${post.id}`} className='btn btn-primary'>Xem chi tiết</Link>
                            </td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else if (postStatus === 'failed') {
		content = <h6 class="text-danger">{error}</h6>
	}

	return (
		<div className='container-md'>
			<h2>Danh sách bài đăng</h2>
			<div className='row justify-content-center'>
				<div className='col-auto'>
					<Link className='btn btn-primary' to="/posts/add">Thêm bài đăng mới</Link>
				</div>
			</div>
			<div className='row justify-content-center'>
				<div className='col-auto'>
					{content}
				</div>
			</div>
		</div>
	)
}