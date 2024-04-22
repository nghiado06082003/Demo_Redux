import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const FinLogsList = () => {
	const finlogs = useSelector(state => state.finlogs)

	return (
		<div className='container-md'>
			<h2>Danh sách các khoản</h2>
			<div className='row justify-content-center'>
				<div className='col-auto'>
					<Link className='btn btn-primary' to="/finlogs/add">Thêm khoản mới</Link>
				</div>
			</div>
			<div className='row justify-content-center'>
				<div className='col-auto'>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Mã khoản</th>
								<th scope="col">Loại khoản</th>
								<th scope="col">Số tiền</th>
								<th scope="col">Mô tả</th>
							</tr>
						</thead>
						<tbody>
							{finlogs.map(finlog => (
								<tr>
									<th>{finlog.id}</th>
									<td>{finlog.category}</td>
									<td>{finlog.amount}</td>
									<td>{finlog.description}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}