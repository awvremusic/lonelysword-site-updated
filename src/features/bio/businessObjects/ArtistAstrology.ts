export class ArtistAstrology {
    private readonly _id: string;
    private readonly _sunSign: string;
    private readonly _moonSign: string;
    private readonly _risingSign: string;

    constructor(data: Partial<ArtistAstrologyData>) {
        const {
            id = "",
            sunSign = "",
            moonSign = "",
            risingSign = "",
        } = data;

        this._id = id;
        this._sunSign = sunSign;
        this._moonSign = moonSign;
        this._risingSign = risingSign;
    }

    get id(): string {
        return this._id;
    }

    get sunSign(): string {
        return this._sunSign;
    }

    get moonSign(): string {
        return this._moonSign;
    }

    get risingSign(): string {
        return this._risingSign;
    }
}