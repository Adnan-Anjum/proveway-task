// document.querySelectorAll('.each-package').forEach((ele)=>{
//     ele.addEventListener('click', (e)=>{
//         e.currentTarget.querySelector('.radio-input').checked=true
//     })
// })




const show=(e,inputId)=>{
    document.getElementById(inputId).checked=true
    let currentElement=e.currentTarget

    document.querySelectorAll('.each-package').forEach((ele)=>{
        if(ele!==currentElement){
            // ele.style.height='72px'
            ele.querySelector('.hidden-div').style.display='none'
            ele.style.border='0.9px solid #C8C8C8'

        }
    })

    // currentElement.style.height='auto'
    currentElement.querySelector('.hidden-div').style.display='block'
    currentElement.style.border='1px solid #FF6B82'

    console.log(currentElement)
}