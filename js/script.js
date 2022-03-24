/*
! fetched data:
* picture.medium
* name.title
* name.first
* name.last
*/

const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const url = 'https://randomuser.me/api/?results=50'
  fetch(url)
    .then(response => {
      if(response.status !== 200) {
        throw Error("To nie jest odpowiedź 200")
      } else {
        return response.json()
      }
    })
    .then(json => console.log(json))
    .catch(error => console.log(error))
})