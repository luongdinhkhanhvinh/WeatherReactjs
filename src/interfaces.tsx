export interface Weather {
    date: string;
    time: string;
    humidity: number;
    pressure: number;
    temp: number;
}

export interface City {
    name: string;
    country: string;
}

export interface ChartData {
    labels: string[];
    datasets: object[];
}
