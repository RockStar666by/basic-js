module.exports = function createDreamTeam(members) {
    let arr = [];
    if (members == 0 || members == undefined) return false;
    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) !== "string") continue;
        arr.push(members[i].trim().charAt(0).toUpperCase());
    }
    return arr.sort().join('');
};