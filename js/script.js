// Feather Icons
feather.replace();

// Typing skills
const typed = document.querySelector(".typed");
let typed_strings = typed.getAttribute("data-typed-items");
words = typed_strings.split(",");
const speed = 100; // typing speed in milliseconds

let i = 0;
let j = 0;
function typeWriter() {
    if (i < words.length) {
        let text = words[i];
        if (j < text.length) {
            document.querySelector(".typed").innerHTML += text.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    } else {
        i = 0;
        j = 0;
        typeWriter();
    }
}

function eraseText() {
    let text = document.querySelector(".typed").innerHTML;
    if (text.length > 0) {
        document.querySelector(".typed").innerHTML = text.slice(0, -1);
        setTimeout(eraseText, speed);
    } else {
        i++;
        j = 0;
        setTimeout(typeWriter, speed);
    }
}

typeWriter(); // start typing the words

// Nav Hover
const hoverIn = (el) => {
    el.classList.remove("circle-icon");
    el.classList.add("btn", "btn-primary", "rounded-5");
    el.append(" " + el.title);
};

const hoverOut = (el) => {
    el.classList.remove("btn", "btn-primary", "rounded-5");
    el.classList.add("circle-icon");
    const icon = document.getElementById(el.title);

    el.textContent = "";
    el.append(icon);
};