module.exports = {
    entry: "./forms/jsLoader.js",
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "./forms/dist/bundle.js",
        //chunkFilename: "./toDo/dist/bundle.js"
    }
};