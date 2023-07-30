import styles from '../styles/showcase.css';
import Spline from '@splinetool/react-spline';
import { NextUIProvider, createTheme,Card, Text,  Navbar, Button, Grid, Image, Avatar } from "@nextui-org/react";
import Link from 'next/link'


const portTheme = createTheme({
    type: 'autumn',
    theme: {
      colors: {
        background: '#f8f5ee',
        text: '#5f3155',
        subText: '#f06852',
        yellowColor: '#eba869'
      },
      space: {},
      fonts: {}
    }
  })
export default function App() {
  return (
    <div>
         { /* Navbar */ }
            <Navbar isBordered variant={"floating"}>
            <Link href="/">
                <Navbar.Brand> 
                    
                    <Avatar src="logo.png" 
                            size="lg"
                            color='warning'
                            bordered
                            zoomed />
                    
                </Navbar.Brand>
                </Link>
                </Navbar>

        <div class="container">
            <div class="content">
            <h1>Project<br></br> Showcase</h1>
            <Text color='$subText'>Unleashing Possibilities: Log-Horizon's Journey into Tech Excellence</Text>
            </div>

            <div class="laptop"> 
            <Spline scene="https://prod.spline.design/KbFNsROuNhs7diSV/scene.splinecode" />
            </div>
        </div>
        
        <div class="cards">
            <Card isHoverable variant="bordered" css={{ mw: "300px" }}>
                <Card.Image 
                src="project1.jpg"
                objectFit="cover"
                width="100%"
                height={200}
                alt={"Fitpal logo"}
                />
                <Card.Body>
                <Text><b>FitPal</b><br></br>Health and wellness application that empowers users to take charge of their well-being.</Text>
                </Card.Body>
            </Card>

            <Card isHoverable variant="bordered" css={{ mw: "300px" }}>
                <Card.Image 
                src="project3.jpg"
                objectFit="cover"
                width="100%"
                height={200}
                alt={"InnovaVision logo"}
                />
                <Card.Body>
                <Text><b>InnovaVision</b><br></br>Advanced computer vision platform for autonomous systems with object detection understanding capabilities</Text>
                </Card.Body>
            </Card>

            <Card isHoverable variant="bordered" css={{ mw: "300px" }}>
                <Card.Image 
                src="project2.jpg"
                objectFit="cover"
                width="100%"
                height={200}
                alt={"GreenScape Planner logo"}
                />
                <Card.Body>
                <Text><b>GreenScape Planner</b><br></br>Innovative urban planning software that facilitates sustainable city development. </Text>
                </Card.Body>
            </Card>
        </div>
        
    </div>
    
    
  );
}





