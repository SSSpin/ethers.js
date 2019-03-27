'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var bytes_1 = require("./bytes");
var errors = require("../errors");
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
    return bytes_1.arrayify(crypto_1.createHmac(algorithm, Buffer.from(bytes_1.arrayify(key))).update(Buffer.from(bytes_1.arrayify(data))).digest());
}
exports.computeHmac = computeHmac;
