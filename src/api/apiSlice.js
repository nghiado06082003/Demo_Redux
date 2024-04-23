import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),

    tagTypes: ['Post'],

    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Post']
        }),
        getPost: builder.query({
            query: postId => ({
                url: `/posts/${postId.postId}`,
                method: 'GET',
            }),
            providesTags: ['Post']
        }),
        addPost: builder.mutation({
            query: initNewPost => ({
                url: '/posts',
                method: 'POST',
                body: initNewPost
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: builder.mutation({
            query: updatedPost => ({
                url: `/posts/${updatedPost.postId}`,
                method: 'PUT',
                body: updatedPost
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation({
            query: postId => ({
                url: `/posts/${postId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
})


export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = apiSlice