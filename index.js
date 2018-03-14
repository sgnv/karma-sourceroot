
var createSoureRootPreprocessor = function () {
    return function (content, file, done) {
        if (file && file.sourceMap && file.path) {
            file.sourceMap.sourceRoot = file.sourceMap.sourceRoot || file.path.substring(0, file.path.lastIndexOf('/'));
        }
        done(content);
    };
};

module.exports = {
    'preprocessor:create-sourceroot': ['factory', createSoureRootPreprocessor]
};