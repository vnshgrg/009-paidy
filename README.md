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

### Add new todo item

User can add a new todo item from the form at the bottom of the screen which consists of a `<TextInput />` and a custom `<Button />` components. When the list item is added, it is firstly added to the redux store, which will then populate the FlatList component data field and then renderItem props will render the list item. `<ListItemTodo />` component is used to render the individual todo item.

### Mark a todo item as complete

Todo item can be marked as completed, updated or deleted. The small button with an icon at the left of each todo item can be used to toggle between that todo items completed state. Once the item has been marked as complete, the text of the item will be have an `strike-through` text decoration and it's opacity will be lowered to create a visual hierarchy between completed todo items and others.

### Delete a todo item

The `Trash` icon at the right side of each todo item can be used to delete the item from the list. You will be asked for confirmation before completing this step.

### Edit/Update a todo item

You can select a todo item to exit/update by tapping on its text. Once selected the todo item will be highlighted and the todo item text will be populated to the bottom form. User can update the todo item from the form. To deselect a selected todo item, simply tap on the selected item's text.

## Running locally

To run this project locally clone this repo using following command:

```
git clone git@github.com:vnshgrg/009-paidy.git
```

Once cloned, install the necessary packages using npm:

```
cd 009-paidy
npm install
```

Once all the packages have been installed you can run the following command to run the app:

```
npm start
```

## Tests

This project also has jest setup and you can run tests using following command:

```
npm test
```

NOTE: Due to the lack of time for this test only few features have tests written and may not cover all the edge cases.
