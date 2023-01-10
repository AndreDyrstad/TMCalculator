import React, { useState } from "react";
import TagButton from "../tag-button/TagButton";
import "./Styles.css"

export default function TagGrid(props) {

    const defaultState = {
        "animal": false,
        "building": false,
        "city": false,
        "earth": false,
        "event": false,
        "jovian": false,
        "microbe": false,
        "plant": false,
        "power": false,
        "science": false,
        "space": false,
        "money": false
    }

    const [activeList, setActiveList] = useState(defaultState)

    let changeActive = activate => {
        let current = {}
        if (props.multiple) {
            current = JSON.parse(JSON.stringify(activeList));
            current[activate] = !current[activate]
            props.calculateDiscount(current)
        }
        else {
            current = defaultState;
            current[activate] = true
            props.setActive(activate)
        }
        setActiveList(current)
    }

    return (
        <div className="TagContainer">
            {props.tags.map(it => {
                return (
                        <TagButton key={it} tag={it} active={activeList[it]} changeActive={changeActive} />
                )
            })}
        </div>
    )
}
