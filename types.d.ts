type HygraphAsset = {
    id: string;
    fileName: string;
    url: string;
}

enum MusicPlatform {
    SPOTIFY = 'spotify',
    APPLE_MUSIC = 'apple',
    SOUNDCLOUD = 'soundcloud',
    YOUTUBE = 'youtube',
}

enum MusicType {
    ALBUM = 'Album',
    SINGLE = 'Single',
    EP = 'EP',
    EXPERIMENT = 'Experiment',
}

enum ZodianSigns {
    ARIES = 'Aries',
    TAURUS = 'Taurus',
    GEMINI = 'Gemini',
    CANCER = 'Cancer',
    LEO = 'Leo',
    VIRGO = 'Virgo',
    LIBRA = 'Libra',
    SCORPIO = 'Scorpio',
    CAPRICORN = 'Capricorn',
    AQUARIUS = 'Aquarius',
    PISCES = 'Pisces',
    SAGITTARIUS = 'Sagittarius',
}

type ArtistAstrologyData = {
    id: string;
    sunSign: ZodianSigns;
    moonSign: ZodianSigns;
    risingSign: ZodianSigns;
}

type ArtistLocationData = {
    id: string;
    city: string;
    state: string;
}

type ExtraArtistInfoData = {
    id: string;
    artistLocation: ArtistLocationData;
    artistAstrology: ArtistAstrologyData;
}

type LiveMusicData = {
    id: string;
    musicTitle: string;
    musicType: MusicType;
    releaseDate: string;
    slug: string;
    spotifyUri: string;
    appleMusicUri: string;
    soundCloudUri: string;
    article: {
        text: string;
        html: string;
    }
}

type SocialOutletData = {
    id: string;
    destinationName: string;
    instagramUrl: string;
    facebookUrl: string;
    twitterUrl: string;
    youtubeUrl: string;
    twitchUrl: string;
}

type MusicOutletData = {
    id: string;
    destinationName: string
    spotifyUri: string
    appleMusicUri: string
    soundCloudUri: string
}
    
type ExternalLinkData = {
    id: string;
    name: string
    url: string
    platform: string
}

type BioData = {
    id: string;
    artistName: string;
    shortDescription: string;
    profilePicture: HygraphAsset;
    fullStory: {
        text: string
        html: string
    }
    pictures: HygraphAsset[];
    musicLinks: ExternalLinkData[];
    funFacts: ExtraArtistInfoData;
}

type HomePageData = {
    recentRelease: LiveMusicData;
}
