# Todo List app build with React-Native

A simple todo list app with local-authentication & redux.

This app was initially created with expo but was ejected after initialization using `npx expo prebuild` as it was mentioned that I should use a bare React-Native project.

This project also uses some libraries from expo and npm in order to complete this project. Specifically I added `expo-local-authentication` package from expo and then configured the library to run on bare React-Native project by adding necessary configuration to both ios and android project.

Another key library to mention is `redux-toolkit`, the project uses `redux` to manage state.

This project has been configured to use 2 slices of redux store namely `authenticationSlice` & `todoSlice`. As the name suggests, authenticationSlice only deals with the user's logged in state (login/logout feature is currently provided by expo-local-authentication) and todoSlice only deals with the state of todo list items created/modified/removed during the app usage period.

## Authentication

Once the user opens the app, they are presented with a basic Auth screen where they can unlock the app (or let's say authenticate themselves) with the bio-metric features (Face ID, Touch ID or Pin Code/Pattern) that their device support. If they fail to authenticate then they can not use the app's todo list feature at all.

Note: If the device does not support any local-authentication feature then the app is unusable to the user as there isn't any alternative authentication process as it was out of scope for this project.

## Todo

When the user is able to authenticate themselves using one of the local-authentication methods, they will be presented a Todo List screen.

The todo list screen is composed of a simple FlatList component from React Native library. The header of the list (`<ListHeader />` component) have title and status of the current number of todo items and number of completed todo items on the left side and a lock button on the right side. User can lock the app when necessary.

All the todo list items are separated uses a basic separator (`<ListSeparator />` component). When there's no item in the todo list an empty state component is displayed (`<ListEmpty />`).
