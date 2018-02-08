module.exports = {
    entry: "./index.js",
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "./dist/app.bundle.js",
        //chunkFilename: "./toDo/dist/bundle.js"
    }
};