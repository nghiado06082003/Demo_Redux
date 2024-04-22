import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../api/apiSlice'


export const PostRTKSingle = () => {
	const { postId } = useParams()
	const { data: post, isFetching, isSuccess } = useGetPostQuery({postId: postId})

	let content = null
	if (isFetching) {
		content = (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Đang tải nội dung...</span>
			</div>
		)
	} else if (isSuccess) {
		content = (
			<div className='container-md'>
				<h3>{post.title}</h3>
				<p>{post.content}</p>
			</div>
		)
	}

	return content
}