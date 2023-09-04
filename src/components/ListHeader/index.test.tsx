import "react-native";
import { Text } from "react-native";
import React from "react";
import { ListHeader } from "./index";

import renderer from "react-test-renderer";

it("renders ListHeader correctly", () => {
  const tree = renderer
    .create(<ListHeader stats={{ total: 2, completed: 1 }} onLock={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
