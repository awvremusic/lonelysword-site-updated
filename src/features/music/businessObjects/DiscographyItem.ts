import { ExternalLink } from "@/features/common/businessObject/ExternalLink";
import { MusicPlatform, MusicType } from "@/features/common/Constants";

export class DiscographyItem {
    private readonly _title: string;
    private readonly _type: MusicType;
    private readonly _releaseDate: string;
    private readonly _coverArt: string;
    private readonly _links: ExternalLink[];
    private readonly _slug: string;

    constructor(data: Partial<BriefMusicData>) {
        const {
            musicTitle = "",
            musicType = "",
            releaseDate = "",
            albumArtwork = { url: "" },
            soundCloudUri = "",
            spotifyUri = "",
            appleMusicUri = "",
            slug = "",
        } = data;

        this._title = musicTitle;
        this._type = musicType;
        this._releaseDate = releaseDate;
        this._coverArt = albumArtwork.url;
        this._links = [];
        this._slug = slug;

        if (soundCloudUri) {
            this._links.push(new ExternalLink({
                name: "SoundCloud",
                url: soundCloudUri,
                platform: MusicPlatform.SOUNDCLOUD,
            }));
        }

        if (spotifyUri) {
            this._links.push(new ExternalLink({
                name: "Spotify",
                url: spotifyUri,
                platform: MusicPlatform.SPOTIFY,
            }));
        }

        if (appleMusicUri) {
            this._links.push(new ExternalLink({
                name: "Apple Music",
                url: appleMusicUri,
                platform: MusicPlatform.APPLE_MUSIC,
            }));
        }
    }

    get title(): string {
        return this._title;
    }

    get type(): MusicType {
        return this._type;
    }

    get releaseDate(): string {
        if (this._releaseDate) {
            return new Date(this._releaseDate).toLocaleDateString();
        }

        return this._releaseDate;
    }

    get coverArt(): string {
        return this._coverArt;
    }

    get links(): ExternalLink[] {
        return this._links;
    }

    get slug(): string {    
        return this._slug;
    }
}