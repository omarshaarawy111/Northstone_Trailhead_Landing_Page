   document.addEventListener("DOMContentLoaded", function () {

    const mainContainer = document.getElementById("main-image");
    const mainImg = mainContainer.querySelector("img");

    const thumbs = document.querySelectorAll(".thumb-image");

    let current = 0;

    function showImage(index){

        current = index;

        const img = thumbs[index].querySelector("img");

        mainImg.style.opacity = 0;

        setTimeout(function(){

            mainImg.src = img.src;
            mainImg.srcset = img.srcset;

            mainImg.style.opacity = 1;

        },180);

        thumbs.forEach(t=>t.classList.remove("active-thumb"));

        thumbs[index].classList.add("active-thumb");

    }

    showImage(0);

    thumbs.forEach((thumb,index)=>{

        thumb.addEventListener("click",()=>{

            showImage(index);

        });

    });

    document.querySelector(".gallery-next").addEventListener("click",()=>{

        current++;

        if(current>=thumbs.length){

            current=0;

        }

        showImage(current);

    });

    document.querySelector(".gallery-prev").addEventListener("click",()=>{

        current--;

        if(current<0){

            current=thumbs.length-1;

        }

        showImage(current);

    });

});