const btn= document.querySelector('button')

const weight = document.getElementById('weight')
const height= document.getElementById('height')
const result = document.getElementsByClassName('result')[0]
const status = document.getElementsByClassName('status')[0]
const recommend = document.getElementsByClassName('recommend')[0]
const hidden = document.getElementsByClassName('hidden')[0]
const input = document.querySelector('input')

function bmi(){
const we = weight.value
const he = height.value

const finalRusult = (we / Math.pow((he/100), 2)).toFixed(2)

result.textContent =finalRusult

hidden.style.display = 'block'
if(finalRusult >= 30){
status.textContent = 'Obesity'
recommd.textContent = 'visit your nutritionist '
}
else if(finalRusult >= 25.0){
status.textContent = 'Overweight'
recommend.textContent = 'Do more of exercise and reduce your calories'
}
else if(finalRusult >= 18.5){
status.textContent = 'Healthyweight'
recommend.textContent = 'keep it up'
}
else{
status.textContent = 'Underweight'
recommend.textContent = 'eat food contining more calories'
}
}
btn.addEventListener('click',bmi)