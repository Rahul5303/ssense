const api="yClt8_HX97YtdOfgA66gmud7iDMEi02AQX5vTVNbGJo";

import navbar from "../components/navbar.js";

document.getElementById('navbar').innerHTML=navbar();

import footer from "../components/footer.js";

document.getElementById('footer').innerHTML=footer();

import footers from "../components/footers.js";

document.getElementById('footers').innerHTML=footers();

import {searchp,append} from "./fetch.js";



// https://api.unsplash.com/search/photos/?query=bags&per_page=500&client_id=yClt8_HX97YtdOfgA66gmud7iDMEi02AQX5vTVNbGJo

let csearchp=(e)=>{
    if(e.key==="Enter"){
        let query=document.getElementById('search').value;
        searchp(api,query).then(function(data){
            console.log("data:",data);

            
        let cont=document.getElementById('container');
        cont.innerHTML=null;

        append(data,cont);
        });
    }
}
document.getElementById('search').addEventListener('keydown',csearchp);