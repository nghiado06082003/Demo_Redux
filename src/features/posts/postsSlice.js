import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	posts: [],
	current_post: {},
	status: 'idle',
	error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get("http://localhost:8080/api/posts")
	return response.data
})

export const fetchPost = createAsyncThunk("post/fetchPost", async (postId) => {
	const response = await axios.get(`http://localhost:8080/api/posts/${postId}`)
	return response.data
})

export const postAdd = createAsyncThunk("posts/postAdd", async (initNewPost) => {
	const response = await axios.post("http://localhost:8080/api/posts", initNewPost)
	return response.data
})

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.status = 'loading'
		})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.posts = state.posts.concat(action.payload)
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(fetchPost.fulfilled, (state, action) => {
				state.current_post = action.payload
			})
			.addCase(postAdd.fulfilled, (state, action) => {
				state.posts.push(action.payload)
			})
	}
})

export default postsSlice.reducer