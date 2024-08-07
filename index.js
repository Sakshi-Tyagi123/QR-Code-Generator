let input = document.querySelector('.input');
let button = document.querySelector('.generate-btn');
let qr = document.querySelector('.qr');
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

button.addEventListener('click', function () {

    
    if(input.value=="")
    {
        let audio = new Audio('error.mp3');
        audio.play();
        qr.innerHTML = `
        <div class="img-qr">
           <p class="para">THE SEARCH BOX FOR URL IS EMPTY ..PLEASE WRITE URL THERE❗<p>
        </div>
    `;  
    }
    else{
    button.textContent = "Generating..";
    qr.innerHTML = `
        <div class="img-qr">
            <img src="" alt="" class="qr-code">
        </div>
    `;

    let img_src = document.querySelector('.qr-code');
    
  
    if (img_src) {
        img_src.onload = function () {
            
            button.textContent = "Generate QR code";
        };
        img_src.setAttribute("src",`${url}${input.value}`);
    }

    input.value="";
   
}
});

