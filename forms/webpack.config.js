module.exports = {
    entry: "./jsLoader.js",
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "./dist/bundle.js",
        //chunkFilename: "./toDo/dist/bundle.js"
    }
};