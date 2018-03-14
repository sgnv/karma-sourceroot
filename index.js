
var createSoureRootPreprocessor = function (args, logger) {
    return function (content, file, done) {
        file.sourceMap.sourceRoot = file.sourceMap.sourceRoot || file.path.substring(0, file.path.lastIndexOf('/'));
    };
};

module.exports = {
    'preprocessor:sourcemap': ['factory', createSoureRootPreprocessor]
};