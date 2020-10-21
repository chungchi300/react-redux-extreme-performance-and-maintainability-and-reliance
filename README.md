# Installation
1. npm i&&npm run start

# Technical Debt/Task Remain
## Organization
1. `src/pages/ConnectedModalBankTransferForm` can be more separate `smart/dummy` component
2. Typing of actions payload
3. transaction&account can be grouped into `domain` state
4. selector pattern in `mapstatsToprops` to further push performance
5. entire network layer can be simplified by [redux-request]`https://github.com/klis87/redux-requests`

## Validation
The submit form should do the async validation

## Testing
1. More Unit Test on other elements, now only cover `src/currentAccount/index.js` as a `reducer testing example` and `src/sagas network saga` as a `side effect testing`
2. `Snapshots` testing

## File Size
1. code split for `components` using `https://reactjs.org/docs/code-splitting.html`
2. the importing of lodash can be more precise like `lodash/keyBy` to use the `treeshaking` for minimal file size with webpack 

## Optional
Absolute import instead of relative import to avoid `path hell`, but sacriface the portability of code(unless install some path plugin when export)

## Reliable Build
switch to yarn and use yarn offline mirror which create a bunch of `.tar` of your package which ensure **reliable build&&avoid attack via npm package**, but the **disadvantage** is bigger package size.

## Multiple package development
Can move helper function&reducers/slices to `common package` & use `lerna` if there is multiple `project`.
