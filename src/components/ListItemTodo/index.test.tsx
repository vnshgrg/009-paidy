import "react-native";
import React from "react";
import { ListItemTodo } from "./index";

import renderer from "react-test-renderer";
import { Todo } from "../../store";

const item: Todo = {
  id: "123",
  title: "Test title",
  isCompleted: false,
  createdAt: 1693796234000,
  updatedAt: 1693796234000,
};

it("renders ListItemTodo correctly", () => {
  const tree = renderer
    .create(
      <ListItemTodo
        item={item}
        selectedItem={null}
        onRemove={(id) => {}}
        onSelect={(id) => {}}
        onToggleComplete={(id) => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders selected ListItemTodo correctly", () => {
  const tree = renderer
    .create(
      <ListItemTodo
        item={item}
        selectedItem={item.id}
        onRemove={(id) => {}}
        onSelect={(id) => {}}
        onToggleComplete={(id) => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders completed ListItemTodo correctly", () => {
  const tree = renderer
    .create(
      <ListItemTodo
        item={{ ...item, isCompleted: true }}
        selectedItem={item.id}
        onRemove={(id) => {}}
        onSelect={(id) => {}}
        onToggleComplete={(id) => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
