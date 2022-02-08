import Card from 'react-bootstrap/Card'
import Container from 'react-bootsrap/Container'

export default function About () {
    return (
    <Container>
        <Card.Header className="blockquote mb-0 card-body">
                <h1>About Us</h1>
                </Card.Header>
                <Card.Text>
            <p>When returning from a spritual journey through the Earth, Monty McMansions 
                decided to dedicate some of his fortune to offering spritiual wellness 
                for others back in his hometown. </p>
                </Card.Text>

                <Card.Text>
            <p>As the heir of the industrious McMansions fortune, Monty was never satisfied 
                with the material wealth that provided him everything he desired. </p>
                </Card.Text>

                <Card.Text>
            <p>Monty decided to travel around the world to find peace and happiness</p>
            </Card.Text>

            <Card.Text>
            <p>Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others</p>
          </Card.Text>
          
        <Card.Img style={{width: '50%', margin: '0 auto'}} variant="bottom" src="hotsprings.jpg" alt="hotsprings" />
    </Container>
    )
}