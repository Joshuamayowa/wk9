const input= document.querySelector('input')
const btn = document.querySelector('button')
const para = document.querySelector('p')

const voteStat = () => {
    const age =(new Date().getFullYear()) - (input.value).slice (0,4)
    para.textContent = age > 18 ? 'old enough to vote' : 'too young to vote'
} 



btn.addEventListener('click', voteStat)