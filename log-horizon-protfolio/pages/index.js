import { NextPage } from "next";
import { Container, Navbar, Text } from '@nextui-org/react';

function Home({ NextPage }){
    return (
        <div>
        <Container>

            { /* Navbar */ }
            <Navbar isCompact variant={'static'}>
                <Navbar.Brand> 
                    <Text b color="inherit">
                        Portfolio
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link href="#"> Contact Us</Navbar.Link>
                </Navbar.Content>
            </Navbar>

            { /* Jumbotron */ }
            { /* Team Cards */ }
        </Container>
        </div>
    )
}

export default Home;