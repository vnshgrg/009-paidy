import "react-native";
import React from "react";
import { Icon } from "./index";

import renderer from "react-test-renderer";

it("renders CheckIcon correctly", () => {
  const tree = renderer.create(<Icon icon="check"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListBulletIcon correctly", () => {
  const tree = renderer.create(<Icon icon="list-bullet"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders LockIcon correctly", () => {
  const tree = renderer.create(<Icon icon="lock"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders UnlockIcon correctly", () => {
  const tree = renderer.create(<Icon icon="unlock"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders MinusIcon correctly", () => {
  const tree = renderer.create(<Icon icon="minus"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders PlusIcon correctly", () => {
  const tree = renderer.create(<Icon icon="plus"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders PlusBicIcon correctly", () => {
  const tree = renderer.create(<Icon icon="plus-big"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders TrashIcon correctly", () => {
  const tree = renderer.create(<Icon icon="trash"></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});
