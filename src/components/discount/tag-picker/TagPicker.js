import React, { useState } from "react";
import { Button } from "react-bootstrap"
import TagGrid from "../tag-grid/TagGrid";
import "./Styles.css"

export default function TagPicker(props) {

    const [active, setActive] = useState(null)

    let addDiscount = amount => {
        props.updateDiscount(active, amount)
    }

    return (
        <div>
            <h2>Select tag and discount</h2>
            <div>
                <TagGrid multiple={false} tags={props.tags} setActive={setActive} />
            </div>
            <div>
                <Button onClick={() => { addDiscount(1); props.showWindow(false) }}>-1</Button>
                <Button onClick={() => { addDiscount(2); props.showWindow(false) }}>-2</Button>
                <Button onClick={() => { addDiscount(3); props.showWindow(false) }}>-3</Button>
                <Button onClick={() => { addDiscount(4); props.showWindow(false) }}>-4</Button>
                <Button onClick={() => props.showWindow(false)}>Cancel</Button>
            </div>
        </div>
    )
}