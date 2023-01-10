import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DiscountPicker from "./discount-picker/DiscountPicker";
import TagPicker from "./tag-picker/TagPicker";

export default function Discount() {

    const [discounts, setDiscounts] = useState({
        "animal": 0, 
        "building" : 0, 
        "city" : 0,
        "earth" : 0, 
        "event" : 0, 
        "jovian" : 0, 
        "microbe" : 0,
        "plant" : 0, 
        "power" : 0,
        "science" : 0,
        "space" : 0,
        "money" : 0
    })

    const [showWindow, setShowWindow] = useState(false)


    const [tags, setTags] = useState(["animal", "building", "city", "earth", "event", "jovian", "microbe","plant", "power", "science", "space", "money"])

    function updateDiscount(tag, inc) {
        var current = discounts
        current[tag] += inc
        setDiscounts(current)
    }



    return(
        <div>
            <h1>Discount tracker</h1>
            {!showWindow && <Button onClick={() => setShowWindow(!showWindow)}>New discount</Button>}
            {showWindow && <TagPicker tags={tags} showWindow={setShowWindow} updateDiscount={updateDiscount}/>}
            {!showWindow && <DiscountPicker tags={tags} discounts={discounts}/>}
        </div>
    )
}