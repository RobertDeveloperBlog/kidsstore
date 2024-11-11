import React from 'react';
import {Button} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

const LoginButton = ({onclick}) => {

    return (
        <Button className="btn-log" color="dark" onClick={onclick}>Log in</Button>
    );
};

export default LoginButton;