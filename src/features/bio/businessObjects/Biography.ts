import { ArtistAstrology } from "./ArtistAstrology";
import { ArtistLocation } from "./ArtistLocation";
import { ExternalLink } from "../../common/businessObject/ExternalLink";

export class Biography {
    private readonly _id: string;
    private readonly _artistName: string;
    private readonly _fullStory: {
        text: string;
        html: string;
    };
    private readonly _profilePicture: HygraphAsset;
    private readonly _pictures: HygraphAsset[];
    private readonly _musicOutlets: ExternalLink[];
    private readonly _artistLocation: ArtistLocation;
    private readonly _artistAstrology: ArtistAstrology;
    
    constructor(data: BioData) {
        const {
            id = "",
            artistName = "",
            profilePicture = {
                id: "",
                url: "",
                fileName: "",
            },
            fullStory = {
                text: "",
                html: "",
            },
            pictures = [],
            musicLinks = [],
            funFacts = {
                artistLocation: {},
                artistAstrology: {},
            },
        } = data;

        this._id = id;
        this._artistName = artistName;
        this._fullStory = fullStory;
        this._pictures = pictures;
        this._musicOutlets = musicLinks.map((outlet) => new ExternalLink(outlet));
        this._artistLocation = new ArtistLocation(funFacts.artistLocation);
        this._artistAstrology = new ArtistAstrology(funFacts.artistAstrology);
        this._profilePicture = profilePicture;
    }

    get id(): string {
        return this._id;
    }

    get profilePicture(): HygraphAsset {
        return this._profilePicture;
    }

    get artistName(): string {
        return this._artistName;
    }

    get fullStory(): string {
        return this._fullStory.html;
    }

    get pictures(): HygraphAsset[] {
        return this._pictures;
    }

    get musicOutlets(): ExternalLink[] {
        return this._musicOutlets;
    }

    get location(): string {
        return `${this._artistLocation.city}, ${this._artistLocation.state}`;
    }

    get artistAstrology(): ArtistAstrology {
        return this._artistAstrology;
    }
}