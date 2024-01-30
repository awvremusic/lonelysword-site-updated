export class ArtistLocation {
    private readonly _id: string;
    private readonly _city: string;
    private readonly _state: string;

    constructor(data: Partial<ArtistLocationData>) {
        const {
            id = "",
            city = "",
            state = "",
        } = data;

        this._id = id;
        this._city = city;
        this._state = state;
    }

    get id(): string {
        return this._id;
    }

    get city(): string {
        return this._city;
    }

    get state(): string {
        return this._state;
    }
}