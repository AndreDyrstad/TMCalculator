import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TagGrid from "../tag-grid/TagGrid";

export default function DiscountPicker(props) {

    const [discount, setDiscount] = useState(0)
    const [baseCost, setBaseCost] = useState(0)

    let calculateDiscount = activeTags => {
        let sum = 0
        props.tags.map(it => {
            if (activeTags[it]) {
                sum += props.discounts[it]
            }
        })
        setDiscount(sum)
    }

    return (
        <div>
            <TagGrid multiple={true} tags={props.tags} calculateDiscount={calculateDiscount} />
            <div>
                <Button className="DiscountButton" onClick={() => setBaseCost(baseCost + 1)}>+1</Button>
                <Button className="DiscountButton" onClick={() => setBaseCost(baseCost + 5)}>+5</Button>
                <Button className="DiscountButton" onClick={() => setBaseCost(baseCost + 10)}>+10</Button>
                <Button variant="danger" className="DiscountButton" onClick={() => setBaseCost(0)}>Reset</Button>
            </div>
            <p>Base cost: {baseCost}</p>
            <p>Discount: {discount}</p>
            <p>Final cost: {Math.max(baseCost - discount, 0)} </p>
        </div>
    )
}