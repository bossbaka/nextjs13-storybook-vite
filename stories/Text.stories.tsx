import { ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
  component: Text,
  title: "Text",
} as ComponentMeta<typeof Text>;

export const primary = () => {
  return <Text />;
};
