import { useDisclosure } from '@mantine/hooks';
import {Modal, Group, Button} from '@mantine/core';
import ModalContent from "./modalContent/ModalContent";
import React from "react";

export default function ButtonModal({text, color, title, position}) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close}
                   title={title} centered={false}
                   size='md' overlayProps={{
                opacity: 0.55,
                blur: 1,
            }}>
            <ModalContent btn_text={text} color={color} onclick={close}/>
            </Modal>

            <Group position={position}>
              <Button color={color} onClick={open}>{text}</Button>
            </Group>
        </>
    );
}