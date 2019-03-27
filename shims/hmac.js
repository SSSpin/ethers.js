"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hash = require("hash.js");
var bytes_1 = require("../utils/bytes");
var errors = require("../errors");
///////////////////////////////
var SupportedAlgorithms;
(function (SupportedAlgorithms) {
    SupportedAlgorithms["sha256"] = "sha256";
    SupportedAlgorithms["sha512"] = "sha512";
})(SupportedAlgorithms = exports.SupportedAlgorithms || (exports.SupportedAlgorithms = {}));
;
function computeHmac(algorithm, key, data) {
    if (!SupportedAlgorithms[algorithm]) {
        errors.throwError('unsupported algorithm ' + algorithm, errors.UNSUPPORTED_OPERATION, { operation: 'hmac', algorithm: algorithm });
    }
    return bytes_1.arrayify(hash.hmac(hash[algorithm], bytes_1.arrayify(key)).update(bytes_1.arrayify(data)).digest());
}
exports.computeHmac = computeHmac;
