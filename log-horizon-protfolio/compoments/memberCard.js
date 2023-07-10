// Component for creating cards showing the team members
import { Card, Text, Col, Button, Loading } from "@nextui-org/react";


// funtcion name starts with uppercase
function MemberCard(props) {
    return (
            <Card>
                <Card.Header css={{position: "absolute", top:5}}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            {props.label}
                        </Text>
                        <Text h4 color="white">
                            {props.title}
                        </Text>
                        
                    </Col>
                </Card.Header>
                <Card.Image src={props.imageURL}></Card.Image>
                {/* <Button disabled auto bordered color="warning" css={{ px: "$13" }}> 
                    <Loading type="points-opacity" color="currentColor" size="sm" />
                </Button> */}
            </Card>
    );
}

export default MemberCard;