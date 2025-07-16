console.log('Hello, webpack JS!');

const app = document.getElementById('app');
const a = 1;
const b = 2;

let c = 0;

function clickA() {
    console.log('Click A');
    // document.querySelector('.img1').src = 'https://as2.ftcdn.net/v2/jpg/01/06/54/84/1000_F_106548417_M6qiLooixiU9YqsAWji59JlGKuqbOYka.jpg';
    document.querySelector("#app h1").textContent = "Hello, Webpack!";
    document.querySelector("#app h1").style.color = "blue"; // Change text color to blue

    let img = document.querySelector('.img1');
    if(a==1) {
        console.log('Setting image source');
        img.src = 'https://as2.ftcdn.net/v2/jpg/01/06/54/84/1000_F_106548417_M6qiLooixiU9YqsAWji59JlGKuqbOYka.jpg'; // Set image source
    } else if(a==2) {
        console.log('Image already set');
    } else {
        console.log('No image to set');
    }

    switch (b) {
        case 1:
            console.log('Case 1');
            break;
        case 2:
            console.log('Case 2');
            break;
        default:
            console.log('Default case');
            break;
    }

    for (let index = 0; index < 3; index++) {
        console.log('Loop index:', index); //0 1 2
    }
    
    while (c < 3) {
        console.log('While loop a:', c); //1 2
        bb();
    }

    cc();
}

function bb() {
    console.log('Function bb called');
    c += 1; // Increment c
}

function cc() {
    cc(); // Recursive call to cc 
    console.log('Function cc called');
}

window.clickA = clickA; // Expose clickA to the global scope

// if ==  number >= <= == > <