import validator from "validator";
const formValidator = (data) => {
  let errors = {};
  const { firstName, lastName, email, password } = data;
  if (validator.isEmpty(firstName)) {
    errors.firstName = "First name required";
  }
  if (validator.isEmpty(lastName)) {
    errors.lastName = "Last name required";
  }
  if (validator.isEmpty(email)) {
    errors.email = "email name required";
  }
  if (validator.isEmpty(password)) {
    errors.password = "password name required";
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};
export default formValidator;
