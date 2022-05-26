import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { hideMessage } from "../../Redux/Alert/Alert.actions";
import { selectAlert } from "../../Redux/Alert/Alert.selectors";

import { StyledAlert, StyledSnackbar } from "./index.styles";

function AlertMessage() {
  const dispatch = useDispatch();

  const { open, type, message } = useSelector(selectAlert);
  const alertRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 5000);
    }
  }, [open, dispatch]);

  return (
    <StyledSnackbar open={open}>
      <StyledAlert
        onLoad={(alertRef.current = this)}
        ref={alertRef}
        type={type}
      >
        {message}
      </StyledAlert>
    </StyledSnackbar>
  );
}

export default AlertMessage;
