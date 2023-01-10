import React from "react";
import { Button } from "react-bootstrap"
import "./Styles.css"

export default function TagButton(props) {

    return (
        <div>
            <Button className="Tag" variant={props.active ? "success" : "danger"} onClick={() => props.changeActive(props.tag)}>
            <img  src={`./tags/${props.tag}.jpg`} alt="logo" />
            </Button>
        </div>
    )
}