import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { "Accept-Version": "v1" }
});

export const getData = async(query, page = 1) => {
    if(!query){
        return;
    }
    const SearchParams = new URLSearchParams({
        per_page: 18,
        client_id: "BQ0ZkyuNk57eGJ2uQS7KcQJ_pN0nG3HeafjCvWaY_PM",
        query,
        page,
        orientation: "landscape",
    });
return instance.get(`/search/photos?${SearchParams.toString()}`);
}