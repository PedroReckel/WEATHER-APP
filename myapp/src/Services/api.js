const KEY = 'f31ff96c874a40f7ac4183333231803';

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    
    return data;
}

export default fetchData;