document.addEventListener('DOMContentLoaded', function(){

var signIn = document.querySelector('.signin');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('body > div > form > button.close');
var submitButton = modal.querySelector('.submit');
var inputs = modal.querySelectorAll('input');

signIn.addEventListener('click', function()
{
  modal.style.display = 'block';
}
)

modalClose.addEventListener('click', function()
{
  modal.style.display = 'none';
}

)

submitButton.addEventListener('click', function(e)
{
  inputs.forEach(function(input)
{
  input.classList.add("Error");
  e.stopPropagation();
}
)
})

inputs.forEach(function(input)
{
  input.addEventListener('click', function(e)
  {input.classList.remove("Error");
  e.stopPropagation();}
  )
})

modal.addEventListener('click', function()
{
  modal.style.display = 'none';

}

)



})
