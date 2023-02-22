# React Native Boilerplate

Base structure for React Native Projects.  
Library inside this boilerplate:

- React Native (0.71)
- React Navigation (for routing)
- Redux + Typed Redux Saga (state management)
- i18n-js (for internationalization)

Typescript is configured and must be default language.  
Two git hooks are configured:

- pre-commit: run eslint and prettier to check code
- commit-msg: run commitlint to check commit message

## Scaffolding

Relative paths are configured for folders:

- `@assets` is `src/assets`
- `@components` is `src/components`
- `@core` is `src/core`
- `@hooks` is `src/hooks`
- `@locales` is `src/locales`
- `@screens` is `src/screens`
- `@utils` is `src/util`

### `Asset` folder

Contain assets for project like images, SVG and fonts.  
SVG can be imported directly as React Component.

### `Components` folder

Contain general components for project.

### `Core` folder

Contain configuration for different section of project, like:

- navigation: router configuration, with methods and types
- store: redux configuration with reducers and sagas
- theme: theme configuration with colors and font families

### `Hooks` folder

Contain pre-made hooks like:

- useAppDispatch: typed useDispatch
- useAppSelector: typed useSelector
- useLanguage: i18n-js as hook
- useStyle: create stylesheet with direct access to theme

Other hooks are present in library [react-use](https://github.com/streamich/react-use), already installed in boilerplate

### `Locales` folder

Contain i18n configuration.  
You can use it with `useLanguage` hooks.  
The folder `values` contain file relative to language.  
You can add other languages simply adding your language object to `language` object in `localizationProvider.tsx`.

### `Screens` folder

Contain screen components definition

### `Utils` folder

Contain utils method definition, structured for categories.

## Scripts

- android: compile and run app on Android
- ios: compile and run app on iOS
- lint: launch eslint to check code quality
- start: run Metro to compile app
- test: run Jest for testing
- prepare: auto-run script for setting up git hooks
- format: run prettier to code format
