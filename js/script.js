const employeeUrl = 'https://randomuser.me/api/?inc=name,location,email,picture';
const employeeGrid = document.getElementById('grid-list');

//RETRIEVE EMPLOYEE DATA
function getEmployees(json){
  console.log(json);
}

//HTML EMPLOYEE CARD GENERATOR
// function employeeCard(data){
//   data.map(person => {
//     const cardDiv = document.createElement('div');
//     employeeGrid.appendChild(cardDiv);
//     cardDiv.innerHTML = `
//       <div class="grid-item">
//         <img src=${}>
//       </div>
//       <div class="emp-des">
//         <h2>${}</h2>
//         <p>${}</p>
//         <p>${}</p>
//       </div>
//     `;
//   });
// }

window.addEventListener('onload', ()=>{
  fetch(employeeUrl)
    .then(response => response.json())
    .then(getEmployees);
});
