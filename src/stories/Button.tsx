import { Group } from '@mantine/core'
import { MantineButton } from '../component/Button/MantineButton'
import { IconBrush } from '@tabler/icons-react'

export const Button = () => {
  return (
    <Group position='center' spacing='xs'>
      <MantineButton children='Customize' leftIcon={<IconBrush size='1rem' />} radius='sm' color='grey' />
      <MantineButton children='Copy code' color='dark' variant='filled' radius='sm' />
    </Group>
  )
}
