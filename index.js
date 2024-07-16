const testForm = (event) => {
    event.preventDefault()
    const surname = document.testRegForm.surname;
    const givenName = document.testRegForm.givenName;
    const dateOfBirth = document.testRegForm.dateOfBirth;
    const placeOfResidence = document.testRegForm.placeOfResidence;
    const occupation = document.testRegForm.occupation;
    const nationality = document.testRegForm.nationality;
    const female = document.getElementById('female');
    const male = document.getElementById('male');
    const category = document.getElementById('category');

    let valid = true;

    let text = /^([A-Za-z]{1,16})+$/;

    if (!surname.value.match(text)) {
        document.getElementById('surnameerror').innerHTML = "Please Enter Surname";
        document.getElementById('surnameerror').style = "color:red;";
        surname.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('surnameerror').innerHTML = "";
        surname.style.border = '';
    }

    let gname = /^([A-Za-z]{1,16})+$/;

    if (!givenName.value.match(gname)) {
        document.getElementById('givenNameerror').innerHTML = "Please Enter Given Name";
        document.getElementById('givenNameerror').style = "color:red;";
        givenName.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('givenNameerror').innerHTML = "";
        givenName.style.border = '';
    }

    if (dateOfBirth.value == '') {
        document.getElementById('dateOfBirthError').innerHTML = "Please select Birth Date";
        document.getElementById('dateOfBirthError').style = "color:red;";
        dateOfBirth.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('dateOfBirthError').innerHTML = "";
        dateOfBirth.style.border = '';
    }

    let pResidence = /^([A-Za-z\s]{2,20})+$/;

    if (!placeOfResidence.value.match(pResidence)) {
        document.getElementById('residenceerror').innerHTML = "Please Enter Place of Residence";
        document.getElementById('residenceerror').style = "color:red;";
        placeOfResidence.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('residenceerror').innerHTML = "";
        placeOfResidence.style.border = '';
    }

    let job = /^([A-Za-z\s]{5,50})+$/;
    if (!occupation.value.match(job)) {
        document.getElementById('occupationerror').innerHTML = "Please Enter Your Occupation";
        document.getElementById('occupationerror').style = "color:red;";
        occupation.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('occupationerror').innerHTML = "";
        occupation.style.border = '';
    }

    let nation = /^([A-Za-z]{5,20})+$/;
    if (!nationality.value.match(nation)) {
        document.getElementById('nationalityerror').innerHTML = "Please Enter Nationality";
        document.getElementById('nationalityerror').style = "color:red;";
        nationality.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('nationalityerror').innerHTML = "";
        nationality.style.border = '';
    }

    if (!female.checked && !male.checked) {
        document.getElementById('gendererror').innerHTML = "Select your Gender";
        document.getElementById('gendererror').style = "color:red;";
        valid = false;
    } else {
        document.getElementById('gendererror').innerHTML = "";
    }

    if (category.value == 'type') {
        document.getElementById('categoryerror').innerHTML = "Select your Category";
        document.getElementById('categoryerror').style = "color:red;";
        category.style.border = '1px solid red';
        valid = false;
    } else {
        document.getElementById('categoryerror').innerHTML = "";
        category.style.border = '';
    }

    if (valid) {
        document.getElementById('regmessage').innerHTML = "Registration was successful";
        document.getElementById('regmessage').style = "color:green;";
    } else {
        document.getElementById('regmessage').innerHTML = "";
    }

    return valid;
}

