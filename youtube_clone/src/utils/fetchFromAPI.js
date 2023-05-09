import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": "dff52213d2msh90734963628e78fp1f5602jsnd9d42f1f7d0d",
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};