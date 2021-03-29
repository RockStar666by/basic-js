module.exports = function repeater(str, options) {
    let arrStr = [];
    let arrAdd = [];

    if (options.repeatTimes === undefined) { options.repeatTimes = 1; };
    if (options.additionRepeatTimes === undefined) { options.additionRepeatTimes = 1; };
    if (options.separator === undefined) { options.separator = '+'; };
    if (options.addition === undefined) { options.addition = ''; };
    if (options.additionSeparator === undefined) { options.additionSeparator = '|'; };

    for (let i = 0; i < options.additionRepeatTimes; i++) {
        arrAdd.push('' + options.addition);
    };

    let addStr = str + arrAdd.join(options.additionSeparator);

    for (let j = 0; j < options.repeatTimes; j++) {
        arrStr.push(addStr);
    };

    return arrStr.join(options.separator);

};