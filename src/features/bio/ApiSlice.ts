import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Biography } from "./businessObjects/Biography";

export const bioApiSlice = createApi({
    reducerPath: 'bioApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/bio/' }),
    endpoints: (builder) => ({
        getBio: builder.query<{
            data: BioData
            success: boolean
            error: string
        }, void>({
            query: () => '/',
        }),
    }),
});

const {
    useGetBioQuery,
} = bioApiSlice;

export const useGetBio = () => {
    const { data, error, isLoading } = useGetBioQuery();

    let biography: Biography | null = null;
    if (data) {
        biography = new Biography(data.data);
    }

    return {
        biography,
        error,
        isLoading,
    };
}