# Example Angular CLI project with Angular Elements (Labs)
This is the project code that is referenced in the video "The Experimental Release of Angular Elements"
from the Nrwl [Angular Enterprise Playbook](https://angularplaybook.com/) course [Angular v6: What is Coming and Updates Since v5](https://angularplaybook.com/p/angular-v6-what-is-coming-and-updates-since-v5).

## Setup instructions
Run `npm i` or `yarn` from within the directory.

Then run `npm run build:elements` or `yarn build:elements` to build the Angular Elements example.

After running that you can open the `dist-elements/index.html` file in a browser to see the Angular Element in action.

If you make changes to your code, you will want to re-run the `build:elements` script to build those changes.

## Things to note
The `angular-elements-labs.tgz` is in here to be able to install `@angular/elements` as a dependency and use the import path in the same way as expected when Angular version 6.0.0 is released. It is a copy of the code from the `labs/elements` branch of the Angular repo. The `@angular/elements` scoped package is not published to npm so it can't be installed from there. Once that is available this `tgz` file can be removed and the dependency in the `package.json` can be set to the current version number instead of the local file.