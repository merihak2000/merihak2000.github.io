const instaIcon = document.getElementById('inst');
const fbIcon = document.getElementById("face")
window.onscroll = function(){ 
  console.log(window.pageYOffset) 
  if(window.pageYOffset > 1200){
    instaIcon.classList.add('insta');
    instaIcon.classList.remove('insta-begin')
    fbIcon.classList.add('fb');
    fbIcon.classList.remove('face-begin')
  }
}


