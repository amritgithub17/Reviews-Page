// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select items from HTML DOCUMENT using DOM methods
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job =document.getElementById("job");
const  info=document.getElementById("info");

const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");
const randombtn=document.querySelector(".random-btn");

//set starting item from the above array
let currentItem =1;//any variable name is writen with first letter of first word as small('c') and then the first letter of next all the words as capital('I').'let' keyword is used to declare a variable

//load initial item
//DOMContentLoaded-it is an event which fires when HTML document loads into the browser except the external sources like img,etc.
//when a wb page opens first 'window' object appears 'document' object is a property of 'window' object 
//so DOMcontentloaded is used with window so that function caan be called and further action can be done even if the document has not properly loaded(means images)
window.addEventListener("DOMContentLoaded",function(){
  show(currentItem);
});

//show people info
function show(currentItem)
{
  const item=reviews[currentItem];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text;
  
};

prevbtn.addEventListener('click',function(){
  currentItem --;
  if(currentItem < 0)
  {
    currentItem=reviews.length - 1;
  }
  show(currentItem);

}
);
nextbtn.addEventListener('click',function(){
  currentItem ++;
  if(currentItem > reviews.length-1)
  {
    currentItem=0;
  }
  show(currentItem);

}
);
randombtn.addEventListener('click',function(){
  currentItem=Math.floor(Math.random() * reviews.length);
  show(currentItem);
})
