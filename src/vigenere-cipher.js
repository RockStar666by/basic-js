class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }

    encrypt(message, key) {

        if (message === undefined || key === undefined) {
            throw Error;
        };

        let result = '';
        let alphabet = [];
        let counter = 0;

        for (let i = 65; i < 91; i++) {
            alphabet.push(String.fromCharCode(i));
        };

        message = message.toUpperCase();
        key = key.toUpperCase();

        for (let j = 0; j < message.length; j++) {
            if (alphabet.includes(message.charAt(j))) {
                let pos = (alphabet.indexOf(message[j]) + alphabet.indexOf(key.charAt(counter % key.length))) % alphabet.length;
                result += alphabet[pos];
            } else {
                counter = counter - 1;
                result += message.charAt(j);
            }
            counter++;
        };
        if (this.reverse === false) { return result.split('').reverse().join('') } else { return result };
    };

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error;
        }
        let result = '';
        let alphabet = [];
        let counter = 0;

        for (let i = 65; i < 91; i++) {
            alphabet.push(String.fromCharCode(i));
        }

        message = message.toUpperCase();
        key = key.toUpperCase();

        for (let j = 0; j < message.length; j++) {
            if (alphabet.includes(message.charAt(j))) {
                let pos = ((alphabet.indexOf(message[j]) + alphabet.length) - alphabet.indexOf(key.charAt(counter % key.length))) % alphabet.length;
                result += alphabet[pos];
            } else {
                counter = counter - 1;
                result += message.charAt(j);
            }
            counter++;
        };
        if (this.reverse === false) { return result.split('').reverse().join('') } else { return result };
    }
}

module.exports = VigenereCipheringMachine;