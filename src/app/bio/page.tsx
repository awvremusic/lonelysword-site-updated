'use client'
import { useGetBio } from '@/features/bio/ApiSlice';
import { LONELYSWORD_BLUE } from '@/features/common/Constants';
import { ExternalLink } from '@/features/common/components/ExternalLink';
import { MediaLinkIcon } from '@/features/common/components/MediaLinkIcon';
import { Typography } from '@/features/common/components/Typography';
import { Spinner, useIsMobile } from '@awvremusic/awvre-ui-web';
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
    const isMobile = useIsMobile();

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
        <article
            className="flex flex-col items-center justify-center text-center"
            style={!isMobile ? {maxWidth: "50%"} : {maxWidth: "100%"}}
        >
            { profilePicture.url !== "" && <Image src={biography.profilePicture.url} alt={biography.profilePicture.fileName} width={200} height={200} priority className="rounded-full overflow-hidden" style={{width: 200, height: 200, objectFit: "cover"}} /> }
            { artistName !== "" && <Typography variant="h1" className='my-4'>{biography.artistName}</Typography> }
            { location !== "" && <Badge className='my-4'>{location}</Badge> }
            { artistAstrology !== undefined && <Typography variant='subtitle1' className='my-4'>{artistAstrology.getDisplayString()}</Typography> }
            { fullStory !== "" && <Typography variant='body1' className='my-4' dangerouslySetInnerHTML={{__html: fullStory}}></Typography> }
            <Typography variant='body1' className='my-4'>I've started a new project! Check me out: <ExternalLink href="https://quick.awvremusic.com" className="text-blue-600 underline cursor-pointer">AWVRE Music</ExternalLink></Typography>
            { musicOutlets.length > 0 && (
                <section className='my-4 flex flex-col justify-center'>
                    { musicOutlets.map((outlet, index) => (
                        <MediaLinkIcon
                        key={index}
                        name={outlet.name}
                        link={outlet.url}
                        platform={outlet.platform}
                        />
        ))}
                </section>
            ) }
        </article>
    );
}