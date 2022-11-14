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
        personalNumberIsValid = false;

	} 
   
    else{
        small.classList.remove("error");
        personalNumberIsValid = true;
    }
    return personalNumberIsValid;
}
function validatePhoneNumber() {
	if (mobileNumber.value.length !==9) {
        small.innerText = "number must be 9";
        small.classList.add("error");
        mobilelNumberIsValid = false;

	} 
    else{
        small.classList.remove("error");
        mobilelNumberIsValid = true;
    }
    return mobilelNumberIsValid;
}
function validateJobDescription() {
	if (jobDescription.value.length < 50) {
        small.innerText = "max char must be 50";
        small.classList.add("error");
        jobDescriptionIsValid = false;

	} 
    else if(jobDescription.value.length == 50){
        small.classList.remove("error");
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