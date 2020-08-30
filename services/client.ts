import axios, {AxiosResponse} from 'axios';



export function getFromUrl<T>(url: string): Promise<T> {
    return axios.get<T>(url).then((response: AxiosResponse<T>) => {
        return response.data;
    });
}

export function getWeather(url: string) {
    return getFromUrl(url);
}