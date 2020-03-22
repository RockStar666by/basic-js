module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depthCounter = 1;
        let num;

        arr.forEach(element => {
            num = depthCounter;
            depthCounter = 1;
            if (Array.isArray(element)) {
                depthCounter += this.calculateDepth(element);
            }
            if (depthCounter < num) {
                depthCounter = num;
            }
        });
        return depthCounter;
    };
};