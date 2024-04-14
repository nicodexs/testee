const gift = document.getElementById('click');
let currentImage = 'cake';
gift.onclick = function() {
    var image = document.getElementById('cake');

    if (currentImage === 'cake') {
        image.src = '../components/gift.png'; 
        image.classList.add('image-transition');
        image.style.position = "absolute";
        image.style.width = "30%";
        image.style.height = "45%";
        image.style.top = "30%";
        image.style.left = "52%";
        currentImage = 'gift'; 
        document.getElementById("click").textContent = `Open the gift!`;

    } else if (currentImage === 'gift') {
        image.src = '../components/og.png'; 
        image.classList.add('image-transition');
        image.style.position = "absolute";
        image.style.width = "fit-content";
        image.style.height = "45";
        image.style.top = "27%";
        image.style.left = "52%";
        currentImage = 'og';
        document.getElementById("click").textContent = `View letter`;

    } else if (currentImage === 'og') {
        image.src = '../components/letter.png';
        image.classList.add('image-transition');
        image.style.position = "absolute";
        image.style.width = "31%"
        image.style.height= "37%"
        image.style.top = "31%";
        image.style.left = "56%";
        currentImage = 'letter'; 
        document.getElementById("click").textContent = `Go to my cake!`;
    } else {
        image.src = '../components/cake.png'; 
        image.classList.add('image-transition');
        image.style.position = "absolute";
        image.style.width = "30%";
        image.style.height = "60%";
        image.style.top = "20%";
        image.style.left = "52%";
        currentImage = 'cake';
        document.getElementById("click").textContent = `Get my  gift!`;

    }
}


