'use client'
import { useGetBio } from '@/features/bio/ApiSlice';
import { LONELYSWORD_BLUE } from '@/features/common/Constants';
import { Typography } from '@/features/common/components/Typography';
import { Spinner } from '@awvremusic/awvre-ui-web';
import Image from 'next/image';
import { styled } from 'styled-components';

const Badge = styled.span`
    padding: 0.2rem 1rem;
    border-radius: 2rem;
    background-color: ${LONELYSWORD_BLUE};
    color: white;
    font-weight: bold;
    font-size: 0.85rem;
`;

export default function Bio() {
    const { biography, isLoading, error } = useGetBio();

    if (isLoading) return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Spinner />
        </main>
    )

    if (!biography) return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Typography
                variant='subtitle1'
            >Biography not found</Typography>
        </main>
    )

    const {
        artistName,
        artistAstrology,
        fullStory,
        profilePicture,
        musicOutlets,
        pictures,
        location,
    } = biography;
    
    return (
        <main className="flex min-h-screen flex-col items-center">
            { profilePicture.url !== "" && <Image src={biography.profilePicture.url} alt={biography.profilePicture.fileName} width={300} height={300} priority className="rounded-full overflow-hidden" style={{width: 300, height: 300, objectFit: "cover"}} /> }
            { artistName !== "" && <Typography variant="h1" className='my-4'>{biography.artistName}</Typography> }
            { location !== "" && <Badge className='my-4'>{location}</Badge> }
            { artistAstrology !== undefined && <Typography variant='subtitle1' className='my-4'>{artistAstrology.getDisplayString()}</Typography> }
        </main>
    );
}