document.getElementById("toggleBtn").addEventListener("click", function () {
    let body = document.body;
    let icon = document.getElementById("icon");


    body.classList.toggle("dark-mode");


    // Toggle icon between sun and moon
    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});


const textElement = document.getElementById('text');
let texts = {

    0: "frontend devloper",
    1: "backend devloper",
    2: "mern stack devloper",
    3: "Have a great day!"
}


let currentIndex = 0;

function changeText() {

    for (let i = 0; i < texts.length; i++) {
        console.log(texts[0]);
    }


    // console.log(data)
}
changeText()
// setInterval(changeText, 1000)


let arr = [1, 3, 2, 6, 7];

arr.forEach((el) => { return el })

