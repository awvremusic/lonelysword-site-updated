import { BioPage } from '@/features/bio/BioPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "AWVRE Music - Bio",
    description: "AWVRE Music - Bio",
}    

export default function Bio() {
    return <BioPage />
}