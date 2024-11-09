const form = document.querySelector("form")
const input = document.getElementById("input")
const list = document.getElementById("list")

form.onsubmit = (event) => {
  event.preventDefault()
  const newItem = input.value
  addItem(newItem)
}


const addItem = (newItem) => {
  const newLi = document.createElement("li")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.classList.add("styled-checkbox")

  const label = document.createElement("label")
  label.classList.add("checkbox-label")

  const span = document.createElement("span")

  const p = document.createElement("p")
  p.textContent = newItem

  label.appendChild(span)
  label.appendChild(p)
  
  const icon = document.createElement("ion-icon")
  icon.name = "trash-outline"
  
  newLi.appendChild(checkbox)
  newLi.appendChild(label)
  newLi.appendChild(icon)

  list.appendChild(newLi)

  input.value = ""
}