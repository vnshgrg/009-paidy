import "react-native";
import { Text } from "react-native";
import React from "react";
import { ItemSeparator } from "./index";

import renderer from "react-test-renderer";

it("renders ItemSeparator correctly", () => {
  const tree = renderer.create(<ItemSeparator />).toJSON();
  expect(tree).toMatchSnapshot();
});
