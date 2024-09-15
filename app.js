document.addEventListener("DOMContentLoaded",() =>{

    const images= document.querySelectorAll("img");

    for(const image of images){
        fetch("https://i.pinimg.com/736x/3e/0b/9d/3e0b9d40088209713a37f2b90f6a3b68.jpg")
        .then(response =>response.json())
        .then(data=> {
            image.src = data.message
            image.width=100;
            image.height=100;
        })
    }
    
})