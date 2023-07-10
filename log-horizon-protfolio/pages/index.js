import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import MemberCard from '../compoments/memberCard';


function Home({ NextPage }){
    return (
        <Container>

            { /* Navbar */ }
            <Navbar isCompact variant={'static'}>
                <Navbar.Brand> 
                    <Text b color="inherit">
                        Portfolio
                    </Text>
                </Navbar.Brand>
                {/* <Navbar.Content>
                    <Navbar.Link href="#"> Contact Us</Navbar.Link>
                    <Navbar.Link href="#"> Temp</Navbar.Link>
                    <Navbar.Link href="#"> Temp</Navbar.Link>
                </Navbar.Content> */}
                <Navbar.Content>
                    <Button size="sm" shadow color="success" href="#"> Contact Us</Button>
                    <Navbar.Item>
                        {/* <Button auto flat href="#"> About Us</Button> */}
                        <Button size="sm" shadow color="gradient" href="#"> About Us</Button>
                      
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

            { /* Jumbotron */ }
                <Grid.Container justify="center" css={{"height": "500px", "backgroundImage":"url(https://littlevisuals.co/images/sunset.jpg)"}}>
                    <Grid xs={12} sm={6} alignItems="center">    {/* Col and Row */}
                        <Col css={{"width": "100%"}}>
                            <Text weight={"bold"} size={70} css={{"textAlign":"center"}}> Log Horizon  </Text>
                            <Text weight={"bold"} size={70} css={{"textAlign":"center"}}> Portfolio </Text>
                        </Col>
                    </Grid> 
                </Grid.Container>
            
            { /* Team Cards */ }
                {/* <Grid.Container gap={2}>
                    <Grid xs={6} sm={4}>
                        <MemberCard
                            label="Ayushi"
                            title = "Developer"
                            imageURL = "https://littlevisuals.co/images/red_dawn.jpg"
                        />
                    </Grid>
                </Grid.Container> */}
        </Container>
    )
}

export default Home;