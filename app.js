// --save: npm will download the moment files, and save a reference in the package.json
//  "moment": "^2.27.0" the carat ^ means that its ok if npm auto updates within the major release
    // like 2.27.1 or 2.27, just not 3.0.0

// in order to save space, we dont store node_modules. all youll need to do is run npm install
    // and it will download everything you need based on the dependencies in the package.json