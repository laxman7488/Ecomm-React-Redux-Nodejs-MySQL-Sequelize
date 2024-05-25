import { config } from '../constants/config';

class Http {
   constructor(){
    this.url=config.apiUrl;
    this.requestOptions = {
        headers: { 'Content-Type': 'application/json' },
    };
   }

   async send(options){

        let url=this.url+options.url
        options=Object.assign(options,this.requestOptions);
        if(options.body){
            options.body = JSON.stringify(options.body);
        }
        return fetch(url, options)
        .then(this.handleResponse);
    }

    // Send post request
    async post(url,data){
        return this.send({url:url,body:data,method:'POST'});
    }

   

    async get(url){
        return this.send({url:url,method:'GET'});
    }
    handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            return data;
        });
    }
}
const http= new Http();
export default http;