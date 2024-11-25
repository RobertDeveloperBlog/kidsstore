import { useDisclosure } from '@mantine/hooks';
import { Modal, Group } from '@mantine/core';
import AuthButton from "../button/AuthButton";
import ModalContent from "./modalContent/ModalContent";

export default function ButtonModal({text, color, title}) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close}
                   title={title} centered={false}
                   size='md' overlayProps={{
                opacity: 0.55,
                blur: 1,
            }}>
            <ModalContent btn_text={text} color={color}/>
            </Modal>

            <Group position="center">
                <AuthButton onclick={open} text={text} color={color}/>
            </Group>
        </>
    );
}