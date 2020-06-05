var navlist = document.getElementById('navbar__list');
var li = document.createElement('li');
li.innerHTML = '<a>Section 1</a>';
li.setAttribute('class', 'list-item')
navlist.appendChild(li);

var li1 = document.createElement('li');
li1.innerHTML = '<a>Section 2</a>';
li1.setAttribute('class', 'list-item')
navlist.appendChild(li1);

var li2 = document.createElement('li');
li2.innerHTML = '<a>Section 3</a>';
li2.setAttribute('class', 'list-item')
navlist.appendChild(li2);

var li3 = document.createElement('li');
li3.innerHTML = '<a>Section 4</a>';
li3.setAttribute('class', 'list-item')
navlist.appendChild(li3);

li2.addEventListener('click', function() {
    document.getElementById('section3').scrollIntoView({
        behavior: 'smooth'
    })
})
li.addEventListener('click', function() {
    document.getElementById('section1').scrollIntoView({
        behavior: 'smooth'
    })
})
li1.addEventListener('click', function() {
    document.getElementById('section2').scrollIntoView({
        behavior: 'smooth'
    })
})
li3.addEventListener('click', function() {
    document.getElementById('section4').scrollIntoView({
        behavior: 'smooth'
    })
})
var element = document.getElementsByClassName("list-item");
for (var i = 0; i < element.length; i++) {


    element[i].onclick = function() {
        var el = element[0];
        while (el) {
            if (el.tagName === "LI") {
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }
        this.classList.add("active");
    }
}

function checkView() {
    let isInViewport = function(elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    const features = document.querySelectorAll('section')[0];
    window.addEventListener('scroll', function(event) {
        if (isInViewport(features)) {
            features.classList.add("active");
        } else {
            features.classList.remove("active");
        }
    }, false);
}
checkView();
// function Viewport(elem) {
//     if (elem.getBoundingClientRec().top == window.pageYOffset) {
//         return true;
//     } else {
//         return false;
//     }

// }

// function myFunction() {
//     const allSections = document.querySelectorAll('section');
//     for (var i = 0; i < allSections.length; i++) {
//         if (Viewport(allSections[i])) {
//             element[i].classList.add("active");
//         } else {
//             element[i].classList.remove("active");
//         }
//     }
// }