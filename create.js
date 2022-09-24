

import navbar from './components/navbar.js'


let nav=document.getElementById('navbar');

nav.innerHTML= navbar();

   let image_url;

//  let image=document.getElementById('image');

//  image.addEventListener('change',function(){

//     handI(event);
        
//  });

let d_btn = document.getElementById('d_btn');

d_btn.addEventListener('click' , function(){
      deletePost();
});


 const deletePost = async() => {

  let id1= document.getElementById('delete').value;

   let res = await fetch(`http://localhost:3000/posts/${id1}` ,{

      method:'DELETE',

      headers : {
        'Content-Type' :'application/json'
      }

   })

   let data= await res.json();

   console.log(data);

 }

 let u_btn = document.getElementById('u_btn');

u_btn.addEventListener('click' , function(){
      updateCaption();
});


  const updateCaption = async() => {

  let new_caption=document.getElementById('change').value;

  let new_id=document.getElementById('update').value;

  let send_data = {
      caption:new_caption,
  }

  let res= await fetch(`http://localhost:3000/posts/${new_id}`,{

       method :'PATCH',

       body : JSON.stringify(send_data),

       headers : {
        'Content-Type' : 'application/json'
       }

      })

        let data_d = await res.json();

        console.log(data_d);

  }


 let c_btn = document.getElementById('btn');

   c_btn.addEventListener('click' , function(){
         addPost();
   })

   c_btn.disabled = true;




    const addPost = async() => {

      let caption = document.getElementById('caption').value;
      let id= document.getElementById('id').value;



         let send_data ={

             caption,
             id,
             image_url,
  };

    console.log(send_data);


    let res =await fetch(`
    http://localhost:3000/posts
    `, {

       method : "POST",

       body:JSON.stringify(send_data),

       headers:{
         'Content-Type' :'application/json',
          
       }

    })

      let deta=await res.json();

      console.log(deta);
    

    }

   let inp=document.getElementById('image');

   inp.addEventListener('change' ,function () {

      handImage(event);

   })

   const handImage = async(event) => {


  //convert image into url address

    //    let id = document.getElementById('id').value;
    //    let caption = document.getElementById('caption').value
       let img = document.getElementById('image');

       console.log(img);

        let actual_image=img.files[0];

        console.log(actual_image);

        let form = new FormData();

        form.append('image',  actual_image);

          console.log(form);
//   console.log(image);

  let api ="c98f14e91923690e9c6829b01c662462";

  let res =await fetch(`https://api.imgbb.com/1/upload?key=${api}`,{

       method :'POST' ,

       body:form,

    });

       let data= await res.json();

       image_url = data.data.display_url

       c_btn.disabled= false;

       console.log( image_url );

  }