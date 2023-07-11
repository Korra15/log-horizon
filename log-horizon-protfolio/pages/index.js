import { Navbar, Text, Button, Grid, Image, Avatar } from '@nextui-org/react';

const imageStyle = {
    border: '1px solid #f06852',
  }

// css={{"paddingLeft":"700px", "paddingTop":"0px"}}

function Home({ NextPage }){
    return (
        <div>
            { /* Navbar */ }
            <Navbar isBordered variant={"floating"}>
                <Navbar.Brand > 
                    <Avatar src="logo.png" 
                            size="lg"
                            color='warning'
                            bordered
                            zoomed />
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Item>
                        <Button size="sm" shadow color="gradient" href="#"> About Us</Button>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button size="sm" shadow color="error" href="#"> Our Projects</Button>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button size="sm" shadow color="success" href="#"> Contact Us</Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

            { /* Jumbotron */ }
                <Grid.Container gap={2} justify='right'>
                    <Grid >
                        <Text weight={"bold"} size={50} css={{"paddingTop":"80px", textAlign:"center"}}> Team Log Horizon </Text>
                        <Text color='$subText' style={{ wordWrap:"break-word", width:"600px", marginTop:"20px"}}>
                            A team of enthusiastic individuals working towards building this world a better place. This is our portfolio showcasing the power, creativity and xeal of the team.
                            we beleive in giving back to the community that has givenus so much!
                        </Text>
                    </Grid>
                    <Grid >
                        <div >
                            <Image src="team.png"
                                alt="Default Image"
                                objectFit='fill'
                                height={600}
                                width={800}
                                css={{"marginLeft": "10px"}}
                            />
                        </div>
                       
                    </Grid>
                    
                </Grid.Container>           
        </div>
    )
}

export default Home;