import React from 'react';
import {PasswordInput, TextInput} from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import ModalFooter from "../modalFooter/ModalFooter";

const ModalContent = () => {
    return (
        <div>
            <TextInput
                placeholder="Введите Ваш email:"
                label="E-mail:"
                mt='xs'
                mb='xs'
                withAsterisk={true}
                radius="md"
            />
            <PasswordInput
                label="Password:"
                placeholder="Введите пароль:"
                visibilityToggleIcon={({ reveal, size }) =>
                    reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
                }
                withAsterisk={true}

            />
            <ModalFooter />

        </div>
    );
};

export default ModalContent;