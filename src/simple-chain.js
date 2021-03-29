const chainMaker = {

    array: [],

    getLength() {
        return this.array.length;
    },
    addLink(value) {
        this.array.push('( ' + value + ' )');
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.getLength() || typeof position !== 'number') {
            this.array = [];
            throw Error;
        }
        this.array.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        let array2 = this.array;
        this.array = [];
        return array2.join('~~');
    }
};

module.exports = chainMaker;