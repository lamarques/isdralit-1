/**
 * Created by marlon on 02/01/15.
 */
exports.capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

exports.removeInvalidAttributes = function (data) {
    for (var fieldName in data) {
        if (!data[fieldName]) {
            delete data[fieldName];
        }
    }
};