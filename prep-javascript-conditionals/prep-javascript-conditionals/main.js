age = 31
function isAdult(age) {
if (age < 18) {
    return false
}else {
  return true
}
}
console.log(isAdult(31))
student1Score = 50
function didStudentPass(score){
if (student1Score < 70) {
    return false
}else {
  return true
}
}
console.log(didStudentPass(50))
student2Score = 75
function gradeCalculator(score) {
if (student2Score < 60) {
  return "F"
}else if (student2Score < 70){
    return "D"
}
else if (student2Score < 80){
  return "C"
}else if (student2Score < 90) {
  return "B"
}else if (student2Score < 100) {
  return "A"
}else if (student2Score == 100) {
  return "A++"
}
}
console.log(gradeCalculator(75))
season = "winter"
function seasonMessenger(season){
if (season === "summer"){
  return "it's hot today"
}else if (season === "spring"){
  return "the flowers are blooming"
}else if (season === "fall"){
  return "the leaves are changing colors"
}else if (season === "winter"){
  return "it's cold today"
}
}
console.log(seasonMessenger(season))
dayOfTheWeek = "Saturday"
function seasonMessenger(season){
if (season === "Saturday" || season === "Sunday"){
  return "it's hot today"
}else
  return "Its a weekday!"
}
