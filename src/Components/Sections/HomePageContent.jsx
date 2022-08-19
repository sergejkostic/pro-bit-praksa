import "./HomePageContent.css";
import Card from "../General/Card";


const card_data = [
    {
        'header': 'Prva Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    
    {
        'header': 'Druga Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Tretja Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    
    {
        'header': 'Cetrta Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    
    {
        'header': 'Peta Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    
    {
        'header': 'Sesta Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Sedma Karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
]


function HomePageContent(props) {
    return (
        <div className="homepage-content">
            <h1>Recent Activity</h1>
            <div className="cards-container">
                {card_data.map((card_data, index) => (
                    <Card  key={index} {...card_data}/>
                ))}
            </div>

        </div>
    )
}


export default HomePageContent;