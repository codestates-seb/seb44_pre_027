const API_BASE_URL = 'https://dahamoverflow.store'
const ACCESS_TOKEN = 'accesstoken';

interface OptionsProps {
    headers: Headers;
    url: string;
    method: string;
    body?: string;
}

export function call(api:string, method:string, request:any) {

    let headers = new Headers({
        "Content-Type": "application/json",
    });


    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken) {
        headers.append("Authorization", "Bearer " + accessToken);
    }


    let options:OptionsProps = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
        body: '',
    }

    if(request) {
        options.body = JSON.stringify(request);
    }
    else{
        delete options.body;
    }

    return fetch(options.url, options)
    .then((response)=>
        response.json().then((json)=>{
            if(!response.ok){
                return Promise.reject(json);
            }
            return json
        })
    )
    .catch((error)=>{
        if(error.status === 403){

        }
        return Promise.reject(error);
    })
}