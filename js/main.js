document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("burger").addEventListener("click",function(){
    document.querySelector(".header").classList.toggle("open")
   })

})

const element1 = document.querySelector(".select__country")
const element2 = document.querySelector(".select__participants")


const choices1 = new Choices(element1,{
    searchEnabled: false,
    itemSelectText: ""
})
const choices2 = new Choices(element2, {
    searchEnabled: false,
    itemSelectText: ""
})

// const modalBtn = document.querySelector('.video__img');
// const modal = document.querySelector('.modal-bg');


let Gallery = document.getElementById('gallery')
lightGallery(gallery, {
    controls: true,
    download: false,
    thumbnail: true,
    plugins: [lgAutoplay, lgThumbnail],
})



