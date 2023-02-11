import validator from "validator";
const formValidator = (data) => {
  let errors = {};
  const { email, password } = data;

  if (validator.isEmpty(email)) {
    errors.email = "Email required";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Password required";
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};
export default formValidator;
