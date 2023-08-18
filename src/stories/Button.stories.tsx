import { Source, Story } from '@storybook/blocks'
import { Meta, type StoryObj } from '@storybook/react'
import { ButtonProps, Group } from '@mantine/core'
import { MantineButton } from '../component/Button/MantineButton' // Correct import path
import { IconBrush } from '@tabler/icons-react'
import { Button } from './Button'

const meta = {
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const WithLayout: Story = (args: ButtonProps) => (
  <Group position='center' spacing='xs'>
    <MantineButton
      children={args.children}
      leftIcon={<IconBrush size='1rem' />}
      radius='sm'
      variant='default'
      color='grey'
    />
    <MantineButton children='Copy code' color='dark' variant='filled' radius='sm' />
  </Group>
)

WithLayout.args = {
  children: 'Customize'
}

WithLayout.parameters = {
  layout: 'centered',
  docs: {
    page: () => (
      <>
        <Story />
        <Source
          language='tsx'
          code={`
import { Group } from "@mantine/core";
import { MantineButton } from "../component/Button/MantineButton";
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
    )
  }
}
WithLayout.tags = ['autodocs']
WithLayout.argTypes = {
  children: { control: 'text' }
}
