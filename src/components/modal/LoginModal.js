import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import LoginButton from "../button/LoginButton";

export default function LoginModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Log in">

            </Modal>

            <Group position="center">
                <LoginButton onclick={open}/>
            </Group>
        </>
    );
}