import React, {useState } from "react";
import TagGrid from "../tag-grid/TagGrid";

export default function DiscountPicker(props) {

    const [discount, setDiscount] = useState(0)

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
            <p>Discount: {discount}</p>
        </div>
    )
}