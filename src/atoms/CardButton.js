import React from 'react'
import Button from "@material-ui/core/Button";

function CardButton(props) {
    return (
        <Button size={props.size}  className={props.className}>{props.children}</Button>
    );

}
export default CardButton;
