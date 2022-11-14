const form = document.querySelector("form");
const personalNumber = document.querySelector("#personal_number");
const mobileNumber = document.querySelector("#mobile_number");
const jobDescription = document.querySelector("#job_description");
const small = document.querySelector("small");
let personalNumberIsValid = false;
let mobilelNumberIsValid = false;
let jobDescriptionIsValid = false;
function validatePersonalNumber() {
	if (personalNumber.value.length !==11) {
        small.innerText = "number must be 11 char or more";
        small.classList.add("error");
        personalNumber.classList.add("error-input");
        personalNumberIsValid = false;

	} 
   
    else{
        small.classList.remove("error");
        personalNumber.classList.remove("error-input");
        personalNumber.classList.add("success-input");
        personalNumberIsValid = true;
    }
    return personalNumberIsValid;
}
function validatePhoneNumber() {
	if (mobileNumber.value.length !==9) {
        small.innerText = "number must be 9";
        small.classList.add("error");
        mobileNumber.classList.add("error-input");
        mobilelNumberIsValid = false;

	} 
    else{
        small.classList.remove("error");
        mobileNumber.classList.remove("error-input");
        mobileNumber.classList.add("success-input");
        mobilelNumberIsValid = true;
    }
    return mobilelNumberIsValid;
}
function validateJobDescription() {
	if (jobDescription.value.length < 50) {
        small.innerText = "max char must be 50";
        jobDescription.classList.add("success-input");
        jobDescriptionIsValid = false;

	} 
    else if(jobDescription.value.length == 50){
        small.classList.add("error");
        jobDescription.classList.add("error-input");
        jobDescription.classList.remove("success-input");
        jobDescriptionIsValid = true;
    }
    return jobDescriptionIsValid;
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const personalNumberIsValid = validatePersonalNumber() ;
	const mobilelNumberIsValid =  validatePhoneNumber();
	const jobDescriptionIsValid = validateJobDescription();

	if (personalNumberIsValid && mobilelNumberIsValid && jobDescriptionIsValid) {
		form.submit();
        form.reset();
	}
});

personalNumber.addEventListener("input", validatePersonalNumber);
mobileNumber.addEventListener("input", validatePhoneNumber);
jobDescription.addEventListener("input", validateJobDescription);