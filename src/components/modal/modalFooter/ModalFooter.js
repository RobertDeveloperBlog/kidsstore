import React from 'react';
import {Box, Button} from "@mantine/core";
import './ModalFooter.css'

const ModalFooter = ({btn_text, onclick}) => {
    return (
        <div className="modal-footer">
          {btn_text === "Log in" && (
            <Box>
                <Button fullWidth variant="outline">
                    Еще не зарегистрированы?
                </Button>
            </Box>
          )}
          <Button className="modal-footer-btn" onClick={onclick}>{btn_text}</Button>
        </div>
    );
};

export default ModalFooter;