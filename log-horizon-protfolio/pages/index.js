import { Navbar, Text, Button, Grid, Image, Avatar } from '@nextui-org/react';
import styles from '../styles/navbar.css';
import Link from 'next/link'

const imageStyle = {
    border: '1px solid #f06852',
  }

//css={{"paddingLeft":"700px", "paddingTop":"0px"}}

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
                        <Button size="sm" shadow color="gradient" href="#"> About Us </Button>
                    </Navbar.Item>
                    <Navbar.Item>
                    <Link href="/showcase">
                        <Button size="sm" shadow color="error"> Our Projects </Button>
                    </Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button size="sm" shadow color="success" href="#"> Contact Us </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

            { /* Jumbotron */ }
                <Grid.Container gap={2} justify='right'>
                    <Grid >
                        <div className={styles.text}>
                        <Text weight={"bold"} size={50} css={{"paddingTop":"80px", textAlign:"center"}}> Team Log Horizon 
                        </Text>
                        </div>
                        <div className={styles.textContainer}>
                        <Text color='$subText' style={{ wordWrap:"break-word", width:"600px", marginTop:"20px", marginLeft:"20px"}}>
                            A team of enthusiastic individuals working towards building this world a better place. This is our portfolio showcasing the power, creativity and xeal of the team.
                            we beleive in giving back to the community that has givenus so much!
                        </Text>
                        </div>

                    </Grid>
                    <Grid >
                        <div className={styles.imageContainer} >
                            <Image src="team.png"
                                alt="Default Image"
                                objectFit='fill'
                                // height={600}
                                // width={800}
                                css={{"marginLeft": "10px"}}

                                className={styles.image}
                            />
                        </div>
                       
                    </Grid>
                    
                </Grid.Container>           
        </div>
    )
}

export default Home;