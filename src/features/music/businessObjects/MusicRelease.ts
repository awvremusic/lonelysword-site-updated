import { ExternalLink } from "@/features/common/businessObject/ExternalLink";
import { MusicPlatform, MusicType } from "@/features/common/Constants";

export class MusicRelease {
    private readonly _title: string;
    private readonly _type: MusicType;
    private readonly _releaseDate: string;
    private readonly _coverArt: string;
    private readonly _links: ExternalLink[];
    private readonly _slug: string;
    private readonly _article: string;
    private readonly _keywords: string[];
    private readonly _learningPoints: string[];
    private readonly _description: string;

    constructor(data: Partial<LiveMusicData>) {
        const {
            musicTitle = "",
            musicType = "",
            releaseDate = "",
            albumArtwork = { url: "" },
            soundCloudUri = "",
            spotifyUri = "",
            appleMusicUri = "",
            slug = "",
            article = {
                html: "",
            },
            keywords = [],
            learningPoints = [],
            description = "",
        } = data;

        this._title = musicTitle;
        this._type = musicType;
        this._releaseDate = releaseDate;
        this._coverArt = albumArtwork.url;
        this._links = [];
        this._slug = slug;
        this._article = article.html;
        this._keywords = keywords;
        this._learningPoints = learningPoints;
        this._description = description;

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

    get description(): string {
        return this._description;
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

    get article(): string {
        return this._article;
    }

    get keywords(): string[] {
        return this._keywords;
    }

    get learningPoints(): string[] {
        return this._learningPoints;
    }
}