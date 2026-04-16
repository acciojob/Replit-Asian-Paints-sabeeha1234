const form = document.getElementById('color-form')
const boxes = document.querySelectorAll('.grid-item')
const resetBtn = document.getElementById('Reset')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const selectedBox = document.getElementById('block_id').value
    const selectedColor = document.getElementById('colour_id').value

    if(selectedBox >= 1 && selectedBox <= 9){

        clearBG()

        const targetBox = document.getElementById(selectedBox)
        targetBox.style.backgroundColor = selectedColor

        form.reset()
    } else {
        alert("Enter valid block id (1-9)")
    }
})

resetBtn.addEventListener('click', clearBG)

function clearBG(){
    boxes.forEach(box => {
        box.style.backgroundColor = "transparent"
    })
}