function formatDisplayName(firstName, lastName) {
    if ( typeof firstName === 'string' && typeof lastName === 'string') {
        return firstName + ' ' + lastName;
    } else if (typeof firstName === 'string' && lastName !== 'string') {
        return "Last name missing";
    } else {
        return "Error, not a string";
    }
}
console.log(formatDisplayName('Alex', 'carey'));