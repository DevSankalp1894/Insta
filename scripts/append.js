


const appendData = (data,container) => {

     
  container.innerHTML = null;

  data.forEach(element =>  {

     let div=document.createElement('div');

     let caption_p=document.createElement('p');

       caption_p.innerText=element.caption;

    let image=document.createElement('img');

    image.src = element.image_url;

    div.append(image,caption_p);

    container.append(div);


  })


}

 export {appendData};