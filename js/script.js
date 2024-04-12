// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let tableemp = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empNum= 1


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    //let department = document.getElementById('department').value


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row= tableemp.insertRow(0)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
let cellID= row.insertCell('id')
let cellName= row.insertCell('name')
let cellExtension= row.insertCell('extension')
let cellEmail= row.insertCell('email')
//let cellDepartment= row.insertCell('department')

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.createTextNode(empID)
    cellName.createTextNode(name)
    cellExtension.createTextNode(extension)
    cellEmail.createTextNode(email)
    //cellDepartment.createTextNode(department)
    
//let content= document.cellID
row.appendChild(cellID)
row.appendChild(cellName)
row.appendChild(cellName)
row.appendChild(cellExtension)
row.appendChild(cellEmail)
//content.appendChild(cellDepartment)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    
    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    let txtEmpID= document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE


})

// DELETE EMPLOYEE
let textDelete = document.createTextNode('X')
deleteBtn.appendChild(textDelete)

form.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
           deleteRow(e.target.path-to-tr-tag.rowIndex)
            checkMessageDisplay()
        }
    }
})