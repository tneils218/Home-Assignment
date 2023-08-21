import { Group } from '@mantine/core'
import { IconBrush } from '@tabler/icons-react'
import { MantineButton } from './component/Button/MantineButton'

function App() {
  return (
    <Group position='center' spacing='xs'>
      <MantineButton children='Customize' leftIcon={<IconBrush size='1rem' />} radius='sm' color='grey' />
      <MantineButton children='Copy code' color='dark' variant='filled' radius='sm' />
    </Group>
  )
}

export default App
