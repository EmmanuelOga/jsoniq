'use strict';

var _ = require('lodash');
var Args = require('./args');

function DynamicError(code, message) {
    Args(arguments).check('String');
    Error.call(this, message);
    this.code = code;
}
DynamicError.prototype = _.create(Error.prototype);
exports.DynamicError = DynamicError;

function StaticError(code, message) {
    Args(arguments).check('String');
    Error.call(this, message);
    this.code = code;
}
StaticError.prototype = _.create(Error.prototype);
exports.StaticError = StaticError;

/*
 * It is a dynamic error if a pending update list contains two inserting update primitives on the same object and pair name.
 */
function JNUP0005(){
    DynamicError.call(this, 'JNUP0005', 'It is a dynamic error if a pending update list contains two inserting update primitives on the same object and pair name.');
}
JNUP0005.prototype = _.create(DynamicError.prototype);
exports.JNUP0005 = JNUP0005;

/*
 * It is a dynamic error if a pending update list contains two JSON replacing update primitives on the same object or array, and with the same selector.
 */
function JNUP0009(){
    DynamicError.call(this, 'JNUP0009', 'It is a dynamic error if a pending update list contains two JSON replacing update primitives on the same object or array, and with the same selector.');
}
JNUP0009.prototype = _.create(DynamicError.prototype);
exports.JNUP0005 = JNUP0009;
