import React from 'react';
import {Button} from "@mantine/core";

const AuthButton = ({onclick, text, color}) => {

    return (
        <Button color={color} onClick={onclick}>{text}</Button>
    );
};

export default AuthButton;