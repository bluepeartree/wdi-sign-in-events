document.addEventListener('DOMContentLoaded', function(){

var signIn = document.querySelector('.signin');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('body > div > form > button.close');
var submitButton = modal.querySelector('.submit');
var inputs = modal.querySelectorAll('input');

// to display sign in block
signIn.addEventListener('click', function()
{
  modal.style.display = 'block';
}
)

//to remove sign in block
modalClose.addEventListener('click', function()
{
  modal.style.display = 'none';
}

)
//generate error if click submit without enter fields
submitButton.addEventListener('click', function(e)
{
  inputs.forEach(function(input)
{
  input.classList.add("Error");
  e.stopPropagation();
}
)
})

//clicking in field removes error class
inputs.forEach(function(input)
{
  input.addEventListener('click', function(e)
  {input.classList.remove("Error");
  e.stopPropagation();}
  )
})

//clicking anywhere except input shields shuts down sign in display
modal.addEventListener('click', function()
{
  modal.style.display = 'none';
})



})
