// selector 
const bodyElement = document.getElementById('body')
const counterElement = document.getElementById('counter')
const emojiElement = document.getElementById('emoji')
const incrementBtnElement = document.getElementById('increment')
const decrementBtnElement = document.getElementById('decrement')
const resetBtnElement = document.getElementById('reset')

let count = 0 

incrementBtnElement.addEventListener('click', () => {
    count++
    // update count update 
    counterElement.textContent = count 
    if(count > 0) {
        // update emoji 
        emojiElement.textContent = '😀'
        // background color change 
        body.style.backgroundColor = `hsl(120,${Math.min(100, count * 10)}%, 80%)`
    }
})