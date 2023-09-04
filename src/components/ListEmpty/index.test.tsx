import "react-native";
import { Text } from "react-native";
import React from "react";
import { ListEmpty } from "./index";

import renderer from "react-test-renderer";

it("renders ListEmpty correctly", () => {
  const tree = renderer.create(<ListEmpty />).toJSON();
  expect(tree).toMatchSnapshot();
});
