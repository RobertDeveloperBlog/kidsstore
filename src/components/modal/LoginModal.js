import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import LoginButton from "../button/LoginButton";
import ModalContent from "./modalContent/ModalContent";

export default function LoginModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close}
                   title="Авторизация:" centered={false}
                   size='md' overlayProps={{
                opacity: 0.55,
                blur: 1,
            }}>
            <ModalContent/>
            </Modal>

            <Group position="center">
                <LoginButton onclick={open}/>
            </Group>
        </>
    );
}