let searchp=async(api,query)=>{

    

    let url=`https://api.unsplash.com/search/photos/?query=${query}&per_page=500&client_id=${api}`;

    let res=await fetch(url);
    // console.log('res:',res);

    let data=await res.json();
    
    return data.results;

}

let append=(data,container)=>{
    data.forEach(({alt_description,urls:{regular}})=>{

        let div=document.createElement('div');

        let t=document.createElement('p');
        t.innerText=alt_description;

        let img=document.createElement('img');
        img.src=regular;

        let p=document.createElement('p');
        p.innerText="$350-$650";

        let btn=document.createElement('button');
        btn.innerText="ADD TO BAG";
        div.setAttribute('class','button');
        btn.addEventListener('click',function(){
            addtobag(data);

        })


        div.append(img,t,p,btn);
        container.append(div);

        // alt_description: "white car"
        // urls.small

    })

}

export {searchp,append};
