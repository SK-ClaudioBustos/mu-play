export interface IitemData {
    song: string
    artist: string
    image: string
}

export interface IsearchParamsProps {
    word: string
    count: number
}

export interface IsearchQuery {
    searchQuery: IsearchParamsProps[]
}

const useFetch = async (props: IsearchQuery) => {
    const { searchQuery } = props;
    const content: any[] = [];
    try {
        await Promise.all(
            searchQuery.map(async (item) => {
                await getFetch(item).then(
                    async function (data) {
                        await content.push(...data);
                    }
                );
            })
        );
        return shuffle(content);
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }
}

const getFetch = async (item: IsearchParamsProps) => {
    const { word, count } = item;
    const url = `https://spotify23.p.rapidapi.com/search/?q=${word}&type=multi&offset=0&limit=${count}&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '59445e8204mshdd151b7d3591391p11d1b9jsn6970c4f5ee49',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    const result = await fetch(url, options)
        .then(
            function (resp1) {
                return resp1.json();
            })
        .then(function (result) {
            const dataExtracted = result.tracks.items;
            const dataFormateada = dataExtracted.map((item: any) => ({
                song: item.data.name,
                artist: item.data.artists.items[0].profile.name,
                image: item.data.albumOfTrack.coverArt.sources[0].url,
            }));
            return dataFormateada;
        });
    return result;
}

function shuffle(array: IitemData[]) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default useFetch;