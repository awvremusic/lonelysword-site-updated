import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DiscographyItem } from "./businessObjects/DiscographyItem";
import { MusicRelease } from "./businessObjects/MusicRelease";

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/music' }),
    endpoints: (builder) => ({
        getDiscography: builder.query<{
            data: BriefMusicData[]
            success: boolean
            error: string
        }, void>({
            query: () => '/',
        }),
        getMusicRelease: builder.query<{
            data: LiveMusicData
            success: boolean
            error: string
        }, string>({
            query: (slug) => `/${slug}`,
        }),
    }),
});

const { useGetDiscographyQuery, useGetMusicReleaseQuery } = musicApi;

export const useDiscography = () => {
    const {data, isLoading, error} = useGetDiscographyQuery();

    let discography: DiscographyItem[] = [];
    if (data && data.success) {
        const discographyData = data.data.map((item) => new DiscographyItem(item)) || [];

        discography = discographyData.sort((a, b) => {
             return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
         });
    }

    return {
        discography,
        isLoading,
        error,
    };
}

export const useMusicRelease = (slug: string) => {
    const {data, isLoading, error} = useGetMusicReleaseQuery(slug);

    let musicRelease: MusicRelease | null = null;
    if (data && data.success) {
        musicRelease = new MusicRelease(data.data);
    }

    return {
        musicRelease,
        isLoading,
        error,
    };
}