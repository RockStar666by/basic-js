const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == "string" && sampleActivity) {
        let value = parseFloat(sampleActivity);
        if (value > 0 && value < MODERN_ACTIVITY) {
            let sampleAge = Math.log(MODERN_ACTIVITY / value) / (0.693 / HALF_LIFE_PERIOD);
            return Math.ceil(sampleAge);
        }
    };
    return false;
};