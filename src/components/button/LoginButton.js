import React from 'react';
import {Button} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

const LoginButton = ({onclick, text, color}) => {

    return (
        <Button className="btn-log" color={color} onClick={onclick}>{text}</Button>
    );
};

export default LoginButton;