import React from 'react';
import {PasswordInput, TextInput} from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import ModalFooter from "../modalFooter/ModalFooter";

const ModalContent = ({btn_text, onclick}) => {
    return (
        <div>
          {btn_text !== "Заказать" && (
            <>
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
            </>
          )}
          {btn_text === "Заказать" && (
            <>
              <TextInput
                placeholder="Номер карты:"
                label="Номер карты:"
                mt='xs'
                mb='xs'
                withAsterisk={true}
                radius="md"
              />
              <TextInput
                placeholder="Срок действия (MM/YY):"
                label="Срок действия (MM/YY):"
                mt='xs'
                mb='xs'
                withAsterisk={true}
                radius="md"
              />
              <TextInput
                placeholder="CVC:"
                label="CVC:"
                mt='xs'
                mb='xs'
                withAsterisk={true}
                radius="md"
              />
            </>
          )}
            <ModalFooter btn_text={btn_text} onclick={onclick}/>

        </div>
    );
};

export default ModalContent;