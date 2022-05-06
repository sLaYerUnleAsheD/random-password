let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~`! @#$%^&*()_-+={[}]|\:;'<,>.?/0123456789"
const alphaArr = characters.split("")
console.log(alphaArr)
const btn = document.querySelector('.btn')
let alertMssg = document.querySelector('.invalid-alert')
let field1 = document.querySelector('.field1')
let field2 = document.querySelector('.field2')
let field3 = document.querySelector('.field3')
let field4 = document.querySelector('.field4')
const cpyBtn1 = document.querySelector('.copy1')
const cpyBtn2 = document.querySelector('.copy2')
const cpyBtn3 = document.querySelector('.copy3')
const cpyBtn4 = document.querySelector('.copy4')

let randomPassword = ["", "", "", ""]
let hexChars = "ABCDEFabcdef0123456789"
const hexArr = hexChars.split("")
let j = 0

function randomizePassword(length){
    if(length > 7 && length < 128){
        btn.style.background = "#10B981"
        alertMssg.textContent = ""
        for(let i=0; i < 4; i++){
            for(let j=0; j<length; j++){
                randomPassword[i] += alphaArr[Math.floor(Math.random() * (alphaArr.length))]
            }
        }
        field1.value = randomPassword[0]
        field2.value = randomPassword[1]
        field3.value = randomPassword[2]
        field4.value = randomPassword[3]
        // console.log(randomPassword[0])
        // console.log(randomPassword[1])
        // console.log(randomPassword[2])
        // console.log(randomPassword[3])
        randomPassword[0] = ""
        randomPassword[1] = ""
        randomPassword[2] = ""
        randomPassword[3] = ""
    }else{
        btn.style.background = "red"
        alertMssg.textContent = "Alert! Min. length is 8 and max. is 127."
    }
}
cpyBtn1.addEventListener('click', () => {
    field1.select();
    field1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(field1.value);
})
cpyBtn2.addEventListener('click', () => {
    field2.select();
    field2.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(field2.value);
})
cpyBtn3.addEventListener('click', () => {
    field3.select();
    field3.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(field3.value);
})
cpyBtn4.addEventListener('click', () => {
    field4.select();
    field4.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(field4.value);
})
setInterval(() => {
    let randomColor = '#'
    for(let i=0; i<6; i++){
        randomColor += hexArr[Math.floor(Math.random() * (hexArr.length))]
    }
    // console.log(randomColor)
    document.querySelector('.green-h1').style.color = randomColor
}, 3000)
