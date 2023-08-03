import React from 'react';
import { Grid, Image, Text, Avatar, Button, Navbar } from '@nextui-org/react';
import Link from "next/link";



function Home({ NextPage }){
    return (
        <div>
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
                        <div>
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