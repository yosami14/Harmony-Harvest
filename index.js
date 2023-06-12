  // user count 
  let countOfUsers  = 1;
  let totalContribution = 0;
  let userObject = {}

  // Add event listener to the button
  document.getElementById("collectDataBtn").addEventListener("click", collectData);

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
        date: formattedDate
        }


        let addUserRow = document.querySelector('#addUserRow');
        let createRow = document.createElement('tr');
        createRow.classList.add([countOfUsers]);
        let createRowHead = document.createElement('th');

        // Row dataHead
        createRowHead.setAttribute('scope', 'row');
        createRowHead.textContent = countOfUsers++;
        createRow.appendChild(createRowHead);

        // Row data print
        let lastObject = userObject[countOfUsers - 1];

        for (let property in lastObject) {
          if (lastObject.hasOwnProperty(property)) {
            var createRowData = document.createElement('td');
            createRowData.textContent = lastObject[property];
            createRow.appendChild(createRowData);
          }
        }

    // Add delete button
    let deleteColumn = document.createElement('td');
    deleteColumn.classList.add('delete');
    deleteColumn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    createRow.appendChild(deleteColumn);

    //event listener to delete button
    deleteColumn.addEventListener('click', function() {
      createRow.remove();
    });

    // Append the row to the table
    addUserRow.appendChild(createRow);

    // Update total contribution
    totalContribution += parseInt(contributionAmount);

    // Update total contribution display
    let totalContributionElement = document.getElementById("displayTotal");
    totalContributionElement.textContent = `Total: ${totalContribution}`;

    // append the row to the table
    addUserRow.appendChild(createRow);

    //revile the table 
    let displayTable = document.querySelector('.displayNon');
    if (countOfUsers > 1) {
    displayTable.classList.remove('displayNon');
    } else {
    displayTable.classList.add('displayNon');
    }
    }


function winner() {
  
  let randomNum = Math.floor(Math.random() * countOfUsers)+1;
  let winner = userObject[randomNum];

  //display the winner
  let modalBody = document.getElementsByClassName('modal-body')[0];

  // Create a new <h2> element
  let winnerHeading = document.createElement('h2');
  
  // Set the text content to the winner's first name
  winnerHeading.textContent = `${winner.firstName} ${winner.fathersName}`;

  // Append the <h2> element to the modal body
  modalBody.textContent = ' ';
  modalBody.appendChild(winnerHeading);

  // Remove previous highlight
  let previousWinner = document.querySelector('.text-danger');
  if (previousWinner) {
    previousWinner.classList.remove('text-danger');
  }

  //add higlight class
  let highlightWinner = document.querySelectorAll('#addUserRow tr')[randomNum];
  highlightWinner.classList.add('text-danger');
}