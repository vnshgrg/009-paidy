import "react-native";
import { Text } from "react-native";
import React from "react";
import { Button } from "./index";

import renderer from "react-test-renderer";

it("renders Button correctly", () => {
  const tree = renderer
    .create(
      <Button>
        <Text>Test button</Text>
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
