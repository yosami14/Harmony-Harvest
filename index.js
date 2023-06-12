  // user count 
  let countOfUsers  = 2;
  let totalContribution = 0;
  let userObject = {}
function collectData() {
  //our users data 
  let firstName = document.getElementById("firstNameInput").value;
  let fathersName = document.getElementById("fatherNameInput").value;
  let email = document.getElementById("userEmailInput").value;
  let phoneNumber = document.getElementById("userPhoneNumberInput").value;
  let contributionAmount = document.getElementById("userContributionInput").value;
  let gender = document.querySelector('input[name="userGender"]:checked').value;


//year-month-date
    // Get the current date
    let currentDate = new Date();

    // Get the individual components of the date
    let year = currentDate.getFullYear(); // 4-digit year (e.g., 2023)
    let month = currentDate.getMonth() + 1; // Month number (1-12; 1 represents January)
    let day = currentDate.getDate(); // Day of the month (1-31)

    // Format the date as a string
    let formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

// Create an object

  userObject[countOfUsers]= {
  firstName: firstName,
  fathersName: fathersName,
  gender:gender,
  email: email,
  phoneNumber: phoneNumber,
  contributionAmount: contributionAmount,
  }





let addUserRow = document.querySelector('#addUserRow');
let createRow = document.createElement('tr');
let createRowHead = document.createElement('th');

//row dataHead
createRowHead.setAttribute('scope', 'row');
createRowHead.textContent = countOfUsers++;
createRow.appendChild(createRowHead);

//row data
  let lastObject = userObject[countOfUsers - 1];

for (let property in lastObject) {
  if (lastObject.hasOwnProperty(property)) {
      let createRowData = document.createElement('td');
      createRowData.textContent = lastObject[property];
      createRow.appendChild(createRowData);
    }
  }



// Update total contribution
  totalContribution += parseInt(contributionAmount);

  // Update total contribution display
  let totalContributionElement = document.getElementById("displayTotal");
  totalContributionElement.textContent = `Total: ${totalContribution}`;
// append the row to the table
addUserRow.appendChild(createRow);





}
// Add event listener to the button
document.getElementById("collectDataBtn").addEventListener("click", collectData);


// function winner() {
//   let randomNum = Math.floor(Math.random() * countOfUsers);
//   let winner = userObject[randomNum];
//   console.log(winner.firstName);
// }

function winner() {
  let randomNum = Math.floor(Math.random() * countOfUsers)+2;
  let winner = userObject[randomNum];
  

  //display the winner
  let modalBody = document.getElementsByClassName('modal-body')[0];

  // Create a new <h2> element
  let winnerHeading = document.createElement('h2');
  
  // Set the text content to the winner's first name
  winnerHeading.textContent = `${winner.firstName} ${winner.fathersName}`;

  // Append the <h2> element to the modal body
  modalBody.appendChild(winnerHeading);

  //add higlight class
 let highlightWinner = document.querySelectorAll('#addUserRow tr')[randomNum-1];
 
  highlightWinner.classList.add('text-danger');
}