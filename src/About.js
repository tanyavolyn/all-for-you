import { useState } from "react";


function About(){

    const[showMore, setShowMore]=useState(false);
    const text = "Willkommen bei ALL FOR YOU – Ihrem ultimativen Modegeschäft für stilvolle und hochwertige Bekleidung. Unser Ziel ist es, Ihnen eine breite Auswahl an modischen Kleidungsstücken und Accessoires anzubieten, die Ihren persönlichen Stil unterstreichen und Ihnen dabei helfen, sich selbstbewusst und schön zu fühlen. Unsere Geschichte beginnt im Jahr 2011, als unser Gründer, ein leidenschaftlicher Modedesigner mit einer Vision, beschloss, seine Leidenschaft für Mode in ein florierendes Geschäft umzuwandeln. Mit viel Hingabe und harter Arbeit gelang es ihm, ein kleines Modegeschäft aufzubauen, das sich schnell einen Namen in der Branche machte. Heute sind wir stolz darauf, unseren Kunden eine beeindruckende Kollektion von Kleidungsstücken und Accessoires aus verschiedenen Teilen der Welt präsentieren zu können.<br/><br/>Bei ALL FOR YOU legen wir großen Wert auf Qualität und Nachhaltigkeit. Deshalb arbeiten wir eng mit unseren Lieferanten zusammen, um sicherzustellen, dass unsere Produkte unter fairen Arbeitsbedingungen hergestellt werden und die Umwelt so wenig wie möglich belasten. Wir sind bestrebt, Ihnen die neuesten Trends aus der Modewelt anzubieten und gleichzeitig innovative Materialien und Produktionsmethoden zu nutzen.<br/><br/>Unsere Produktpalette umfasst Damenbekleidung sowie Accessoires wie Schuhe, Taschen und Schmuck. Egal ob Sie auf der Suche nach einem lässigen Outfit für den Alltag oder einem eleganten Abendkleid für besondere Anlässe sind – bei uns finden Sie garantiert das passende Stück. Unsere erfahrenen Stylisten stehen Ihnen zudem jederzeit zur Verfügung, um Sie bei der Auswahl des perfekten Outfits zu unterstützen.<br/><br/>Neben unserem stationären Geschäft bieten wir auch einen benutzerfreundlichen Online-Shop an. So können Sie bequem von zu Hause aus durch unser Sortiment stöbern und Ihre Lieblingsartikel direkt an Ihre Haustür liefern lassen. Wir legen großen Wert auf Kundenzufriedenheit: Sollten Sie Fragen oder Anmerkungen haben oder Hilfe bei Ihrer Bestellung benötigen, steht Ihnen unser freundlicher Kundenservice jederzeit zur Verfügung.<br/><br/>Wir laden Sie herzlich ein, Teil unserer wachsenden Community von modebegeisterten Kunden zu werden! Folgen Sie uns auf Social Media oder abonnieren Sie unseren Newsletter für exklusive Angebote sowie Neuigkeiten rund um unsere neuesten Kollektionen.<br/><br/>Vielen Dank für Ihr Interesse an ALL FOR YOU. Wir freuen uns darauf, Ihnen dabei zu helfen, Ihren persönlichen Stil zum Ausdruck bringen!<br/><br/>Ihr Team von ALL FOR YOU";
    return(
        <div className="containerabout">
            <img className="aboutbild" src="gal02.jpg" alt="Bild"/>
            <div className="abouttext">
            <h3 className="abouttitel">All about us</h3>
                <div>
                <p className="textabout">{showMore ? text : text.substring(0,350) + "..."}<button className="btnabout" onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>

                </div>
            </div>
        </div>
    )
}
export default About;