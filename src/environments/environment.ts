// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCmcuuqCKCVJ6H8UHeiX5WNF1f9dnzfR24",
    authDomain: "quickstart-9ddcf.firebaseapp.com",
    databaseURL: "https://quickstart-9ddcf.firebaseio.com",
    projectId: "quickstart-9ddcf",
    storageBucket: "gs://quickstart-9ddcf.appspot.com",
    messagingSenderId: "314021235019"
  }
};
