import { Dispatch } from "react";
import { IContentBox } from "../components/ContentBox";

interface useFetch {
    data: any
    setData: Dispatch<any>
}

export interface itemData {
    song: string
    artist: string
    image: string
}

const useFetch = async (props: IContentBox) => {
    const { word, count } = props;

    const url = `https://spotify23.p.rapidapi.com/search/?q=${word}&type=multi&offset=0&limit=${count}&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '59445e8204mshdd151b7d3591391p11d1b9jsn6970c4f5ee49',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const request = await fetch(url, options);
        const result = await request.json();
        const dataExtracted = result.tracks.items;
        const dataFormateada = dataExtracted.map( ( item: any ) => ({
            song: item.data.name,
            artist: item.data.artists.items[0].profile.name,
            image: item.data.albumOfTrack.coverArt.sources[0].url,
        }));
        return dataFormateada;
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }
}   

export default useFetch;