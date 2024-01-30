export class ExternalLink {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _url: string;
    private readonly _platform: string;

    constructor(data: Partial<ExternalLinkData>) {
        const {
            id = "",
            name = "",
            url = "",
            platform = "",
        } = data;

        this._id = id;
        this._name = name;
        this._url = url;
        this._platform = platform;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get url(): string {
        return this._url;
    }

    get platform(): string {
        return this._platform;
    }
}