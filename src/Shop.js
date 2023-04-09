import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import Button from "./Button";

function Shop(){
    const[clothes, setClothes]=useState(data);
    const chosenClothes=(searchTerm)=>{
        const newClothes=data.filter(element=> element.searchTerm===searchTerm);
        setClothes(newClothes)
    }

    return(
        <div>
            <div className="free">
                <h2>Free Standart Shipping</h2>
            </div>
            <Button filteredClothes={chosenClothes} />
            <Clothes itemsForSale={clothes}/>
        </div>
    );
}
export default Shop;