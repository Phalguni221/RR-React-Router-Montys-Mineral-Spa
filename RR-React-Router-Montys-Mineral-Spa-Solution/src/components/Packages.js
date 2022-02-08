import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup+'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <Card>
            <Card.Body>
            <Card.Title>
                    <h1>Our Packages</h1>
                </Card.Title>
                <Card.Text>
                    Check out some of the packages we have!
                </Card.Text>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
                </Card.Body>

        </Card>
    )
}