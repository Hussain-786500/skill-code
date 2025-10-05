function addLanguage(addlLang){
    const li = document.createElement('li');
    li.innerHTML = `${addlLang}`
    document.querySelector(".language").
    appendChild(li)
}

addLanguage("Pathsala")
addLanguage("Super Pathsala")


function addLanguage (addLang){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(addLang))
    document.querySelector(".language").
    appendChild(li)
}

addLanguage("Hospital")
addLanguage("collage")
addLanguage("super pathsala")

//edit

const secondLang = document.querySelector("li:nth-child(2)")

secondLang.innerHTML = ("pathsala")

const addLang = document.querySelector("li:last-child")
addLang.remove()




