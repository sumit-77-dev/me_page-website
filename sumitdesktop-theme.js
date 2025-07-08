let imagechanged = true

let light = false;
function lighttheme()  {

    document.querySelector('.body').classList.toggle('body-light');
    document.querySelector('.content-box').classList.toggle('content-box-light');
    document.querySelector('.home').classList.toggle('home-light');
    document.querySelector('.text1-js').classList.toggle('text1-light');
    document.querySelector('.text2-js').classList.toggle('text2-light');
    document.querySelector('.profession-js').classList.toggle('profession-light');
    document.querySelector('.icons-js').classList.toggle('icons-light');
    toogleimage();
    light = !light;
}


const lightimagesSources = ['icon_about.webp', 'icon_links.webp', 'icon_work.webp', 'icon_faq.webp', 'icon_contact.webp'];
const darkimagesSources = ['icon_about_dark.webp', 'icon_links_dark.webp', 'icon_work_dark.webp', 'icon_faq_dark.webp', 'icon_contact_dark.webp'];



function toogleimage(){
    const images = document.querySelectorAll('.image');
    let headerimage = document.querySelector('.header-1');
    if(imagechanged){
        images.forEach((img, index) => {
            img.src = lightimagesSources[index];
        }
        )
        headerimage.src = 'dark_mode_light.webp';
    }
    else{
        images.forEach((img, index) => {
        img.src = darkimagesSources[index];
        }
        )
        headerimage.src = 'dark_mode_dark.webp';
    }

    

    imagechanged = !imagechanged;
}




