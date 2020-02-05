const crypto = require('crypto');

exports.sessionid = function (phone, pass) {
    let sessionstr = phone + Date.now() + pass;
    return  crypto.createHash("sha256").update(sessionstr).update(pass).digest("hex").toUpperCase();
};

exports.passencry = function (addtime, pass, creator) {
    let sessionstr = pass + creator + addtime;
    return  crypto.createHash("sha256").update(sessionstr).update(pass).digest("hex").toUpperCase();
};