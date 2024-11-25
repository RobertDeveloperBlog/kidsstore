import React, {useState} from 'react';
import {PasswordInput, TextInput} from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import ModalFooter from "../modalFooter/ModalFooter";

const ModalContent = ({btn_text}) => {
  const [value, setValue] = useState('');
    return (
        <div>
            <TextInput
                value={value} onChange={(event) => setValue(event.currentTarget.value)}
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
            <ModalFooter btn_text={btn_text}/>

        </div>
    );
};

export default ModalContent;