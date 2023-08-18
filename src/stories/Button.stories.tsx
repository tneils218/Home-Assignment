import { Source, Story } from "@storybook/blocks";
import { Meta, type StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLayout: Story = {
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Story />
          <Source
            language="tsx"
            code={`
import { Group } from "@mantine/core";
import { MatineButton } from "../component/Button/MatineButton";
import { IconBrush } from "@tabler/icons-react";
            
export const Button = () => {
  return (
    <Group position="center" spacing="xs">
      <MantineButton
        children="Customize"
        leftIcon={<IconBrush size="1rem" />}
        radius="sm"
        color="grey"
      />
      <MantineButton
        children="Copy code"
        color="dark"
        variant="filled"
        radius="sm"
        />
    </Group>
  );
};
                `}
          />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
