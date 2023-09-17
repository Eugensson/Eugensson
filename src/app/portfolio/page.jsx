import CardList from "@/components/CardList/CardList";
import { cardItemsIndividual, cardItemsTeam, cardItemsCommercial } from "@/data"

const Portfolio = () => {
    return (
      <section className="section">
        <h1>Portfolio</h1>
        <h2>Individual educational projects</h2>
        <CardList data={cardItemsIndividual}/>
        <h2>Team educational projects</h2>
        <CardList data={cardItemsTeam}/>
        <h2>Commercial projects</h2>
        <CardList data={cardItemsCommercial}/>
      </section>
    )
  }
  
  export default Portfolio;