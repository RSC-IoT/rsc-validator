const Joi = require('joi')

module.exports = class Validator {

    constructor() {
        this.schema = {}
    }

    _addValidation(property, validation) {
        this.schema = Object.assign({}, this.schema, {
            [property]: validation
        })
    }

    isValid(input) {

        const result = Joi.validate(
            input,
            Joi.object(this.schema)
        )

        return result.error
    }
}