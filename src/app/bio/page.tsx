'use client'
import { useGetBio } from '@/features/bio/ApiSlice';
import { LONELYSWORD_BLUE } from '@/features/common/Constants';
import { Spinner } from '@awvremusic/awvre-ui-web';
import { Badge, Typography } from '@mui/material';
import Image from 'next/image';

export default function Bio() {
    const { biography, isLoading, error } = useGetBio();

    if (isLoading) return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Spinner />
        </main>
    )

    if (!biography) return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Typography>Biography not found</Typography>
        </main>
    )

    const {
        artistName,
        artistAstrology,
        fullStory,
        shortDescription,
        profilePicture,
        socialOutlets,
        musicOutlets,
        pictures,
        location,
    } = biography;
    
    return (
        <main className="flex min-h-screen flex-col items-center">
            { profilePicture.url !== "" && <Image src={biography.profilePicture.url} alt={biography.profilePicture.fileName} width={300} height={300} priority className="rounded-full overflow-hidden" style={{width: 300, height: 300, objectFit: "cover"}} /> }
            { artistName !== "" && <Typography>{biography.artistName}</Typography> }
            { location !== "" && <Badge style={{backgroundColor: LONELYSWORD_BLUE}}>{location}</Badge> }
        </main>
    );
}