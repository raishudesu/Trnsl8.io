import {
  Header,
  Flex,
  ActionIcon,
  useMantineColorScheme,
  Title,
  Drawer,
  Text,
  Group,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const PageHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const dark = colorScheme === "dark";
  return (
    <Header height={60} p="xs">
      <Flex justify={"flex-start"} align={"center"} h={"100%"} gap={12}>
        <Drawer opened={opened} onClose={close} title="Trnsl8.io">
          <Flex direction={"column"} gap={20}>
            <Text>Privacy and Terms</Text>
            <Text>Help</Text>
            <Text>Send Feedback</Text>
          </Flex>
        </Drawer>

        <Group position="center">
          <Burger opened={opened} onClick={open} size={"sm"} />
        </Group>
        <Title order={2}>Trnsl8.io</Title>
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
      </Flex>
    </Header>
  );
};

export default PageHeader;
