export default function Validation(inputValue) {
    const errors = {};

    const name_pattern = /[a-z]{10}[0-9]{4}/g;
    const phoneNumber_pattern = /01[0-9]/;
    const age_pattern = /^(1[89]|[2-9][0-9]|100)$/;

    if (inputValue.name === "") {
        errors.name = "Name is Required";
    }
    else if (!name_pattern.test(inputValue.name)) {
        errors.name = "The Name must start with 10 letters, then 4 numbers";
    }

    if (inputValue.phoneNumber === "") {
        errors.phoneNumber = "Phone Number is Required";
    } 
    else if (!phoneNumber_pattern.test(inputValue.phoneNumber)) {
        errors.phoneNumber = "The phone number must consist of 11 digits and begin with '01' ";
    }

    if (inputValue.age === "") {
        errors.age = 'Age is Required'
    }
    else if (!age_pattern.test(inputValue.age)) {
        errors.age = "Age must be between 18 and 100 years"
    }

    if (inputValue.areYouEmployed === false) {
        errors.areYouEmployed = "Cheoose are you Employed";
    }

    
    return errors;
};