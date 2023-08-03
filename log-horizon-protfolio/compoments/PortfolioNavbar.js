import React from 'react';
import { Avatar, Button, Navbar } from '@nextui-org/react';
import Link from "next/link";


function PortfolioNavbar(props){
    return (
        <div>
            { /* Navbar */ }
            <Navbar isBordered variant={"floating"}>
                <Navbar.Brand > 
                    <Link href="/">
                        <Avatar src="logo.png" 
                                size="lg"
                                color='warning'
                                bordered
                                zoomed />
                    </Link>
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
        </div>
    )
}

export default PortfolioNavbar;