function inputValidator(inputName, inputValue) {

    const checkEmail = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');

    const isAnother =
        (inputName === 'name') ||
        (inputName === 'body');

    if (isAnother) {
        const checkAnother = inputValue.length;

        if (checkAnother < 3) {
            return `${inputName} Must be at least 2 characters long`
        }
    }

    const isEmail = (inputName === 'email');

    if (isEmail) {
        const checkAllEmail = checkEmail.test(inputValue);

        if (!checkAllEmail) {
            return 'Email has invalid characters'
        }
    }

    return '';
}

export default inputValidator;
