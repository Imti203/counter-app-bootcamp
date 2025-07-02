
(function () {
    // selector 
const bodyElement = document.getElementById('body')
const counterElement = document.getElementById('counter')
const emojiElement = document.getElementById('emoji')
const incrementBtnElement = document.getElementById('increment')
const decrementBtnElement = document.getElementById('decrement')
const resetBtnElement = document.getElementById('reset')

let count = 0 

function updateBackgrudColorAmdEmoji(receiveCount) {
      // update count update 
    counterElement.textContent = receiveCount 
    if(receiveCount > 0) {
        // update emoji 
        emojiElement.textContent = '😀'
        // background color change 
        body.style.backgroundColor = `hsl(120,${Math.min(100, count * 10)}%, 80%)`
    }else if (receiveCount < 0) {
          // update emoji 
        emojiElement.textContent = '😢'
        // background color change 
        body.style.backgroundColor = `hsl(0,${Math.min(100, Math.abs(count * 10))}%, 80%)`
    }else {
        // update emoji 
        emojiElement.textContent = '🙂'
        // background color change 
        body.style.backgroundColor = `hsl(0, 0%, 100%)`
    }
}

// increment button
incrementBtnElement.addEventListener('click', () => {
    count++
  
    updateBackgrudColorAmdEmoji(count)
})

// Handling decrement button 
decrementBtnElement.addEventListener('click', () => {
     count--
    
     updateBackgrudColorAmdEmoji(count)
})

// Handling reset button 
resetBtnElement.addEventListener('click', () => {
    count = 0
   
    updateBackgrudColorAmdEmoji(count)
})

})()

