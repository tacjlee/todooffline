# Create React App example with Material-UI, TypeScript, Redux and Routing

This is a new version with React Hooks, Material-UI 4 and React-Redux 7 (with hooks!). We use this template for all our new projects. If you want to bootstrap a project with the classic approach without hooks but with class components, you are welcome to use the 

<img width="100%" src="screenshot.png" alt="example"/>

## Contains

-   [x] [Material-UI](https://github.com/mui-org/material-ui)
-   [x] [Typescript](https://www.typescriptlang.org/)
-   [x] [React](https://facebook.github.io/react/)
-   [x] [Redux](https://github.com/reactjs/redux)
-   [x] [Redux-Thunk](https://github.com/gaearon/redux-thunk)
-   [x] [Redux-Persist](https://github.com/rt2zz/redux-persist)
-   [x] [React Router](https://github.com/ReactTraining/react-router)
-   [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

## Roadmap

-   [x] Make function based components and use hooks for state etc.
-   [x] Implement [Material-UIs new styling solution](https://material-ui.com/css-in-js/basics/) based on hooks
-   [x] use react-redux hooks
-   [ ] Hot Reloading -> Waiting for official support of react-scripts

## How to use

Download or clone this repo

Install it and run:

```bash
npm i
npm start
```

## Enable PWA ServiceWorker [OPTIONAL]

Just comment in the following line in the `index.tsx`:

```javascript
// registerServiceWorker();
```

to

```javascript
registerServiceWorker();
```

## Pakages:
- [axios]: for calling API include: GET, PUT, POST, DELETE...
- [localforage]: component to save data to IndexedDB, WebSQL or LocalStorage if browser supporting it.
- [redux-logger]: for loging
- [redux-persist]: sync ReduxState to IndexedDB, WebSql or LocalStorage
- [redux-thunk]: for supporting asynchronous functions

## Classes, Components and Pages
- [cache/CacheManager.ts] The wrapper class of localforage to get or set data of IndexedDB, WebSQL or LocalStorage
- [middleware/apiMiddleware.ts] The simple way and less code to GET, POST, PUT, DELETE...Suports dispatch Success or Error action. And allow to customize header request easy.
- [hook/index.ts] The customized useActions hook, auto dispatch action and cache
- [service/TodoSynService.ts] The service fetching offline local data and sending it to server when internet comes back.
- [SyncTodoTable.tsx] The component showing sync todo from MockAPI server.
- [pages/SyncTodoPage.tsx] The page containing SyncTodoTable component
- [TodoDialog.tsx] The component allow user input Todo item.
- [TodoTable.tsx] The component containing Todo list
- [pages/TodoPage.tsx] The Todo page containing TodoTable component
- [util/typedAction] The function return action type to reduce repeatly code
- [configreStore.tsx] Config store to work with middlewares, and support persiting ReduxState to IndexedDB, WebSQL or LocalStorage