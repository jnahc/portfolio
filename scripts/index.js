// console.log('yup')

// DEV ICON CASCADE
$("#skills").hover(function(){
  $(".devicon-javascript-plain").addClass('bounce-in-fwd1')
  $(".devicon-python-plain-wordmark").toggleClass('bounce-in-fwd2')
  $(".devicon-react-original-wordmark").toggleClass('bounce-in-fwd3')
  $(".devicon-nodejs-plain-wordmark").toggleClass('bounce-in-fwd4')
  $(".devicon-express-original-wordmark").toggleClass('bounce-in-fwd5')
  $(".devicon-django-line-wordmark").toggleClass('bounce-in-fwd6')
  $(".devicon-mongodb-plain-wordmark").toggleClass('bounce-in-fwd7')
  $(".devicon-postgresql-plain-wordmark").toggleClass('bounce-in-fwd8')
  $(".devicon-html5-plain-wordmark").toggleClass('bounce-in-fwd9')
  $(".devicon-css3-plain-wordmark").toggleClass('bounce-in-fwd10')
  $(".devicon-jquery-plain-wordmark").toggleClass('bounce-in-fwd11')
})

// PICTURE COLORIZE SECTION

// SELF PIC
$("#bio-intro").hover(function(){
  console.log('bio-intro section')
  $("#jeff-pic").toggleClass('img-color')
});

// NOVEMBER PROJECT PICS
$("#november-2019").hover(function(){
  console.log('november-2019 section')
  $(".november-project-pictures").toggleClass('img-color')
});

// SEPT/OCT PROJECT PICS
$("#september-october-2019").hover(function(){
  console.log('september-october-2019 section')
  $(".sept-oct-project-pictures").toggleClass('img-color')
});

// BOLD LOGO
$("#bold").hover(function(){
  console.log('bold section')
  $(".bold-logo").toggleClass('img-color')
});

// Project Management LOGO
$("#project-management").hover(function(){
  console.log('project-management section')
  $(".sfsu-logo").toggleClass('img-color')
});

// Single Grain LOGO
$("#single-grain").hover(function(){
  console.log('single-grain section')
  $(".single-grain-logo").toggleClass('img-color')
});