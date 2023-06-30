
let string="";
let result;
let button=document.querySelectorAll('.button');

document.querySelector('.result').innerHTML=localStorage.getItem('total');

let value=Array.from(button);

// console.log(value);

// console.log(value.splice(value.length-1,1));

value.forEach((button)=>
{

 button.addEventListener('click',(e)=>
 {



if(e.target.innerHTML=="=")
  {
     let total=eval(string);
     string+=e.target.innerHTML;
     result=string+total;
     console.log(result);
     document.querySelector('.result').innerHTML=result;

     
}
  
  else if(e.target.innerHTML==="Clear")
  {
    string=" ";
    document.querySelector('.result').innerHTML=string;
  }

  


 else
  {
   console.log(e.target);
   string+=e.target.innerHTML;
   document.querySelector('.result').innerHTML=string;
   
   
  }

  localStorage.setItem('total',result);

  

})
}
)
