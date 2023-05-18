const form = document.querySelector("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  validateInputs();

  successMsg();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error-msg');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error-msg');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(firstNameValue === '') {
    setError(firstName, 'First Name cannot be empty');
  } else {
    setSuccess(firstName);
  }

  if(lastNameValue === '') {
    setError(lastName, 'Last Name cannot be empty');
  } else {
    setSuccess(lastName);
  }

  if(emailValue === '') {
    setError(email, 'Email cannot be empty');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Looks like this is not an email');
  } else {
    setSuccess(email);
  }

  if(passwordValue === '') {
    setError(password, 'Password cannot be empty');
  } else {
    setSuccess(password);
  }
}

const successMsg = () => {
  var isSuccess = document.getElementsByClassName('success');
  if (isSuccess.length == 4) {
    form.innerHTML = `
    <div class="thankyou-msg">
      <p>Thank you for signing up! Please check your email to confirm your account.</p>
    </div>
    `
  }
}