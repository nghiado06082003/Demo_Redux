import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { finlogAdd } from './finlogsSlice'

export const FinLogAdd = () => {
	const [category, setCategory] = useState('')
	const [amount, setAmount] = useState('')
	const [description, setDescription] = useState('')

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const onCategoryChanged = e => setCategory(e.target.value)
	const onAmountChanged = e => setAmount(e.target.value)
	const onDescriptionChanged = e => setDescription(e.target.value)

	const onSaveClicked = () => {
		if (category && amount && description) {
			dispatch(finlogAdd(category, amount, description))
			setCategory('')
			setAmount('')
			setDescription('')
			return navigate("/")
		}
	}

	return (
		<div className='container-md'>
			<h2>Thêm một nhật ký</h2>
			<form>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<label for="postCategory" className="form-label">Loại khoản:</label>
						<input
							type="text"
							className='form-control'
							id="postCategory"
							name="postCategory"
							value={category}
							onChange={onCategoryChanged}
						/>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<label for="postAmount" className="form-label">Số tiền:</label>
						<input
							type="number"
							className='form-control'
							id="postAmount"
							name="postAmount"
							value={amount}
							onChange={onAmountChanged}
						/>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<label for="postDescription" className="form-label">Mô tả:</label>
						<textarea
							className='form-control'
							id="postDescription"
							name="postDescription"
							value={description}
							onChange={onDescriptionChanged}
						/>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<button className="btn btn-primary" onClick={onSaveClicked}>Lưu!</button>
					</div>
				</div>


			</form>
		</div>
	)
}