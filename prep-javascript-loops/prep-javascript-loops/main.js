const newarray=[]
let i = 0
text = ""
function whileLoop1() {
  while (i < 10) {
    text += "The number is " + i;
    newarray.push(i);
    i++;
}
return newarray
}


console.log("whileLoop1 output", whileLoop1())

const newarray1=[]
let q = 0

function whileLoop2() {
  while (q < 19) {
    text += "The number is " + q;
    newarray1.push(q);
    q+=2;
}
return newarray1
}
console.log("whileLoop2 output", whileLoop2())

const newarray3=[]
function forLoop1() {
  for (w = 0;  w < 10; w++) {
  newarray3.push(w);
}
return newarray3

}
console.log("forloop1 output", forLoop1())

const newarray4=[]
function forLoop2() {
  for (p = 100;  p > 0; p--) {
  newarray4.push(p);
}
return newarray4
}
const object = {
    name: 'Ada LoveLace',
    age: 'classic',
    hobby: 'computation',
    invention: 'analytical engine'
}
function forInLoop1(object){
  const array1=[]
  console.log(object)
  for (const x in object) {
  array1.push(x)
  console.log(x)
  console.log(array1)

}
return array1
}
console.log("For in loop", forInLoop1(object))
function forInLoop2(object){
  const array2=[]
  console.log(object)
  for (const x in object) {
  array2.push(x)
  console.log(x)
}
return array2
}
console.log("For in loop2", forInLoop2(object))
