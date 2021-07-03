let form = document.getElementById('form')
let bioData = document.getElementById('bio-data')
let previewBox = document.getElementById('preview')
let btnConfirm = document.getElementById('confirm')
let btnReset = document.getElementById('reset')

// var dataInfo = false

;[...form.elements].forEach((inputs) => {
    if(inputs.type !== 'submit') {
        inputs.addEventListener('blur', function() {
            if(!inputs.value) {
                inputs.classList.add('invalid')
                // dataInfo = false
            } else {
                inputs.classList.remove('invalid')
                // dataInfo = true
            }

        })
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let storeData = ''

    ;[...this.elements].forEach((el) => {

        if(el.type !== 'submit') {
            
            if(!el.value) {
                el.classList.add('invalid')
            } else {
                el.classList.remove('invalid')
                // console.log(el.name + ' : ' + el.value)

                storeData += el.name + ' : ' + el.value + '<br><br>'
                
                // preview(el, bioData)
                openPreview(previewBox)
                
            }

        }
 
    })

    bioData.innerHTML = storeData
    
})


function preview(elem, parent) {
    let str = elem.name + ' : ' + elem.value
    parent.innerHTML = str
}

function openPreview(box) {
    box.style.display = 'block'
}
function closePreview(box) {
    box.style.display = 'none'
};

let list = document.getElementById('list');

// ====== application box ======

list.addEventListener('dblclick', function(event) {
    if(this.contains(event.target)) {
        let innerText = event.target.innerText
        event.target.innerHTML = ''

        let inputBox = createInputBox(innerText)
        event.target.appendChild(inputBox)

        inputBox.addEventListener('blur', function(e) {
            event.target.innerHTML = e.target.value
        })
    }
})

function createInputBox(value) {
    let inp = document.createElement('textarea')
    inp.value = value

    return inp
}

// ====== CONFIRM AND MODIFY BUTTON

btnConfirm.addEventListener('click', function() {
    closePreview(previewBox)
    form.reset();
    [...form.elements].forEach((v) => {
        v.classList.remove('invalid')
    });

    list.innerHTML = `<li>DD/MM/YYYY</li>
    <li>The mmanaging Director,</li>
    <li>123 road main office, London</li><br>
    <li>Subject: (your subject)</li><br>
    <li>Dear Sir,</li><br>
    <li class="list-item">(Application body)</li><br>
    <li>Your obediently,</li>
    <li>Your name</li>`

})

btnReset.addEventListener('click', function() {
    closePreview(previewBox)
})

