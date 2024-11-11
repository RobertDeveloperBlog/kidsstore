import React from 'react';
import {Box, Button} from "@mantine/core";
import './ModalFooter.css'

const ModalFooter = () => {
    return (
        <div className="modal-footer">
            <Box>
                <Button fullWidth variant="outline">
                    Еще не зарегистрированы?
                </Button>
            </Box>
            <Button className="modal-footer-btn">Войти</Button>
        </div>
    );
};

export default ModalFooter;