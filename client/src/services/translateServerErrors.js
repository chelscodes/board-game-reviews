import _ from 'lodash'

let translateServerErrors = (errors) => {
  let serializedErrors = []

  Object.keys(errors).forEach((key) => {
    const messages = errors[key].map((error) => {
      serializedErrors.push(error.message)
    })
  });
  return serializedErrors
};

export default translateServerErrors;
