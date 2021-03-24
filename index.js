// Code your solutions in this file
const name = ["Lisa","Kaitlin", "Jan"];

 function writeCards(name) {
   let array = []
  for (let i=0; i < name.length; i++) {
    array.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  } 
  return array;
} 

function countDown(num) {
  while (num > 0) { 
    console.log(num)
    num-=1
     
  }
  console.log(num)
}