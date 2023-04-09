function Clothes ({itemsForSale}){
    return(
        <div className="clothesrow">
            {itemsForSale.map((element=>{
                const{id, name, price, image} = element;
                return(

                    <div className="clothescontainer" key={id}>
                        <img src={image} alt="Bild" width="400px"/>
                        <div>
                            <h3 className="clothesname">{name}</h3>
                            <h3>€{price}</h3>
                        </div>

                    </div>
             
                )
            }))}

        </div>
    )
}
export default Clothes;