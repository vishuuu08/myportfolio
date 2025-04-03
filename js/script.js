var sidemenuu = document.getElementById("sidemenu");
function openmenu(){
  sidemenuu.style.right = "0";
}
function closemenu(){
  sidemenuu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwCZkmuhfGjrYmkuSNvK4TdJMhIEE_y34t6a7FOjxg7fKzpfHSBUPGUjDnSM5hrjNFjsQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Message Sent Successfully"
      setTimeout(function(){
        msg.innerHTML=""
      },4000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})