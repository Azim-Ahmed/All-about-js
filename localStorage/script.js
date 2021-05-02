const nameInput = document.querySelector('#name')
const ageInput = document.querySelector("#age")
const professionInput = document.querySelector("#profession")
const profile = document.querySelector('.profile')

const formSubmit_section = document.querySelector('.formSubmit_section')
//listening event
function loadEventListener() {
    document.addEventListener('DOMContentLoaded', getProfiles)
    formSubmit_section.addEventListener("submit", profileSubmit)
}
loadEventListener()
function getProfiles() {
    let profiles;
    if (localStorage.getItem("profile")) {
        profiles = JSON.parse(localStorage.getItem('profile'))
    } else {
        profiles = []
    }
    profiles.forEach(prof => profile.innerHTML += formatData(prof))
}


function profileSubmit(e) {
    e.preventDefault()
    let ProfileData = {
        name: nameInput.value,
        age: ageInput.value,
        profession: professionInput.value
    }
    const formattedData = formatData(ProfileData)
    saveDataToLocalStorage(ProfileData)
    profile.innerHTML += formattedData
    nameInput.value = ''
    ageInput.value = ''
    professionInput.value = ''

    console.log(ProfileData, profile)

}

function formatData({ name, age, profession }) {
    return `
    <div class="showing__result">
    <h1 class="name_data">Name : ${name}</h1>
    <p class="ageData">Age : ${age}</p>
    <p class="profession">Profession: ${profession}</p>
  </div>`

}
// One Way
// let profiles = []
// function saveDataToLocalStorage(ProfileData) {
//     profiles.push(ProfileData)
//     localStorage.setItem('profile', JSON.stringify(profiles))
// }

// Second Way
function saveDataToLocalStorage(ProfileData) {
    let profiles;
    if (localStorage.getItem("profile")) {
        profiles = JSON.parse(localStorage.getItem('profile'))
    } else {
        profiles = []
    }
    profiles.push(ProfileData)
    localStorage.setItem('profile', JSON.stringify(profiles))
}

