import { Group } from "@mantine/core";
import { MatineButton } from "./component/Button/MatineButton";
import { IconBrush } from "@tabler/icons-react";

function App() {
  return (
    <Group position="center" spacing="xs">
      <MatineButton
        children="Customize"
        leftIcon={<IconBrush size="1rem" />}
        radius="sm"
        color="grey"
      />
      <MatineButton
        children="Copy code"
        color="dark"
        variant="filled"
        radius="sm"
      />
    </Group>
  );
}

export default App;
