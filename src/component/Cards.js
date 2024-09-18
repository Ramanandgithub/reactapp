import './Cards.css';
import Card from  './Card';

function Cards({cards}) {
    console.log(cards);

    let allcard = [];

    Object.values(cards).forEach((cardCategory)=>{
        cardCategory.forEach((singlecard)=>{
            allcard.push(singlecard);

        })
    })
    // console.log(allcard);
    return (
        <div className='allcards'>
            {
                allcard.map((cards)=>{
                    return <Card key={cards.id} carddata = {cards} />
                })
            }

        </div>
    )
    
}

export default Cards;