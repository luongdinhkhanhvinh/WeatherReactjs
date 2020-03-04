export namespace Store {
    export type AllWeathers = {
        date: string,
        time: string,
        humidity: number,
        pressure: number,
        temp: number,
        error: number
    }[];

    export type All = {
        allWeathers: AllWeathers
    };
}