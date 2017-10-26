# The Validator

A validator so simple we could have written it twice, but decided not to. Leverages Joi for all the hard work.

## Step 1: Create a Custom Validator
```
const Validator = require('the-validator')

class MyValidator extends Validator {

  requireUserId() {
    return this._addValidation('userId', Joi.uuid().required())
  }
  
  requireUserId() {
    return this._addValidation('age', Joi.number().required())
  }
}
```

## Step 2: Use the Validator
```
const validator = new MyValidator()
const isValid = validator
  .requiredUserId()
  .requireUserAge()
  .isValid(userInput)
  
if (!isValid) {
  throw 'User input was invalid!'
}
```