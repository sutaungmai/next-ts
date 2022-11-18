import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (name) => `${name}`
        })
    })
})

export const {useGetProductsQuery} = productsApi