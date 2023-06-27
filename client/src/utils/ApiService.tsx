import { RootState } from "@/modules/store";
import { useSelector } from "react-redux";

const API_BASE_URL = 'https://dahamoverflow.store'
const ACCESS_TOKEN = 'login';

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


    const accesstoken = useSelector((state: RootState) => state.login).accesstoken;
    console.log('accessToken: '+ accesstoken);
    if(accesstoken) {
        headers.append("Authorization", accesstoken);
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