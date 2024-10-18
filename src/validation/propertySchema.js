export const validationSchema = {
    title(value) {
        if (value?.length >= 6) return true
        return 'The field must contain at least 6 digits'
    },
    price(value) {
        /*
            ^ - Representa el inicio de la cadena.
            [0-9]+ - Representa cualquier número del 0 al 9. El + indica que debe haber al menos un dígito, pero puede haber más.
            $ - Representa el final de la cadena.
        */
        if (/^[0-9]+$/.test(value)) return true
        return 'The field must contain only numbers'
    },
    rooms(value) {
        if (value) return true
        return 'You must select a quantity'
    },
    wc(value) {
        if (value) return true
        return 'You must select a quantity'
    },
    parking(value) {
        if (value) return true
        return 'You must select a quantity'
    },
    description(value) {
        if (value) return true
        return 'A description is required'
    }
}

export const imageSchema = {
    photo(value) {
        if (value) return true
        return 'An image is required'
    },
}