const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav bar
let a_tag = document.querySelectorAll('nav a');
let i = 1;
a_tag.forEach(function(element){
    element.textContent = siteContent.nav[`nav-item-${i++}`];
})

//title
let h1_tag = document.querySelector('h1');
h1_tag.textContent = siteContent.cta.h1;

let button_tag = document.querySelector('.cta-text button');
button_tag.textContent = siteContent.cta.button;

let img_tag = document.querySelector('.cta img');
img_tag.setAttribute('src', siteContent["cta"]["img-src"]);

//main content
//top
let content = document.querySelector(".main-content .top-content .text-content h4");
content.textContent = siteContent["main-content"]["features-h4"];

content = document.querySelector(".main-content .top-content .text-content p");
content.textContent = siteContent["main-content"]["features-content"];

content = document.querySelector(".main-content .top-content .text-content:last-child h4");
content.textContent = siteContent["main-content"]["about-h4"];

content = document.querySelector(".main-content .top-content .text-content:last-child p");
content.textContent = siteContent["main-content"]["about-content"];
//middle img
content= document.querySelector(".middle-img");
content.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//bottom
content = document.querySelector(".main-content .bottom-content .text-content h4");
content.textContent = siteContent["main-content"]["services-h4"];

content = document.querySelector(".main-content .bottom-content .text-content p");
content.textContent = siteContent["main-content"]["services-content"];

content = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) h4");
content.textContent = siteContent["main-content"]["product-h4"];

content = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) p");
content.textContent = siteContent["main-content"]["product-content"];

content = document.querySelector(".main-content .bottom-content .text-content:last-child h4");
content.textContent = siteContent["main-content"]["vision-h4"];

content = document.querySelector(".main-content .bottom-content .text-content:last-child p");
content.textContent = siteContent["main-content"]["vision-content"];

//contact
content = document.querySelector(".contact").children;

content[0].textContent = siteContent["contact"]["contact-h4"];
content[1].textContent = siteContent["contact"]["address"];
content[2].textContent = siteContent["contact"]["phone"];
content[3].textContent = siteContent["contact"]["email"];

//footer
content = document.querySelector("footer p");
content.textContent = siteContent["footer"]["copyright"];

//add new content
content = document.querySelectorAll("nav a");
content.forEach( (element) => element.style.color = 'green' );

content = document.querySelector("nav");
let new_content = document.createElement('a');
new_content.textContent = "Hello";
new_content.style.color = 'green';
content.prepend(new_content);

let more_content = document.createElement('a');
more_content.textContent = "Goodbye";
more_content.style.color = 'green';
content.appendChild(more_content);



