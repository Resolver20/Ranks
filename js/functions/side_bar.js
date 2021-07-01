export function ShowSidebar(){
     
     let collections=document.getElementsByClassName("menu_options");
     for(let i=0;i<collections.length;i++){
          collections[i].style.opacity="0";
     }
     if(document.getElementsByClassName("bi bi-chevron-down")[0].style.animation!="0.5s ease 0s 1 normal forwards running rotate_up"){

          document.getElementsByClassName("drop_down")[0].style.display="flex";
          document.getElementsByClassName("drop_down")[0].style.animation = "pull_down 0.5s"; 
          document.getElementsByClassName("drop_down")[0].style.animationFillMode = "forwards"; 
          document.getElementsByClassName("bi bi-chevron-down")[0].style.animation = "rotate_up 0.5s"; 
          document.getElementsByClassName("bi bi-chevron-down")[0].style.animationFillMode = "forwards"; 
          setTimeout( function(){
               for (let i = 0; i < collections.length; i++) {
                    collections[i].style.opacity = "1";
               }
          },310 );
     }
     else{
          setTimeout(function(){

               document.getElementsByClassName("drop_down")[0].style.animation = "pull_up 0.5s"; 
               document.getElementsByClassName("bi bi-chevron-down")[0].style.animation = "rotate_down 0.5s"; 
               document.getElementsByClassName("bi bi-chevron-down")[0].style.animationFillMode = "forwards"; 
               setTimeout( function(){
                    document.getElementsByClassName("drop_down")[0].style.display="none";
               },500 );
          },50);

     }
}