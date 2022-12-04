

$( document ).ready(function() {
    
    if ($('.slides')[0]) {
    $('.slides').slick({
        
        prevArrow: '<button class="prev-arrow"><span class="arrow left"></span></button>',
        nextArrow: '<button class="next-arrow"><span class="arrow right"></span></button>',
        speed: 400,
        dots: true,
    });
}
});
$( document ).ready(function() {
    
    if ($('.related-slides')[0]) {
    $('.related-slides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="related-prev-arrow"><span class="related-arrow related-left"></span></button>',
        nextArrow: '<button class="related-next-arrow"><span class="related-arrow related-right"></span></button>',
        speed: 400,
        infinite: false,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
}
});

 
  
// ------------------------------------------ align three JS code-------------------------------------------------------------------------


//  odkomentarisati kada se sve zavrsi :)


// window.addEventListener('resize',
// function () { setTimeout(go, 100); }
// );

// function go(){
//   document.getElementById('height-50-percent-1').style.height = 'auto';
//   document.getElementById('height-50-percent-2').style.height = 'auto';
//   document.getElementById('height-50-percent-3').style.height = 'auto';

//       let cardHeight1 = document.getElementById('height-50-percent-1').offsetHeight;
//       let cardHeight2 = document.getElementById('height-50-percent-2').offsetHeight;
//       let cardHeight3 = document.getElementById('height-50-percent-3').offsetHeight;
//       let arr = [cardHeight1, cardHeight2, cardHeight3]
//       console.log(arr);
//       let returnNum = Math.max(...arr)
//       document.getElementById('height-50-percent-1').style.height = returnNum.toString() + "px";
//       document.getElementById('height-50-percent-2').style.height = returnNum.toString() + "px";
//       document.getElementById('height-50-percent-3').style.height = returnNum.toString() + "px";
  
//       console.log(returnNum);
//     };

//     go();

    // _____________________________________________________________________________________________________________________________________

// ---------------------- expand card  ----------------------------------------------------------------
var coll = document.getElementsByClassName("northwest-expand-card-arrow");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentNode.parentNode.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 

    var content1 = this;
    if (content1.style.transform){
      content1.style.transform = null;
    } else {
      content1.style.transform = "rotate(180deg)";
    } 
  });
}

// ______________________________________________________________________________________________________________