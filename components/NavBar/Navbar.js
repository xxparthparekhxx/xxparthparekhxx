import React, { useEffect, useState } from 'react'
import { Head } from '../header'
import { flex } from '../../styles/flex'
import { NavbarItem } from './Item'
import { GetBlackChild } from "../eye/getBlackChield"
import { DefaultSeo } from 'next-seo'
import SEO from "../../next-seo.config"
export const Navbar = ({ children }) => {
    const navbartitles = ["Work", "Blog", "Contact"]


    return (

    <Head>

        <header style={{
            position: 'fixed',
            display: "block",
            backgroundColor: "black",
            zIndex: 1000,
            
        }}>

            <div >
                <nav style={{ ...flex('row'), width: "100vw", justifyContent: "space-between", paddingLeft: "1.75em", paddingRight: "1.75em" }}>

                    <div style={{ ...flex("row") }}>
                        {navbartitles.map((e, i) =>
                            <NavbarItem key={e} TEXT={e} />
                        )

                        }
                    </div>
                    <div style={{ padding: 10 }}>
                        <GetBlackChild></GetBlackChild>
                    </div>
                    <div style={flex("row")}>
                        <NavbarItem blank TO={"https://github.com/xxparthparekhxx"} TEXT={<img alt={"Github Profile"} style={{ height: "1.2em" }} src='/github-mark-white.svg'></img>}></NavbarItem>
                        <NavbarItem blank TO={"https://www.linkedin.com/in/xxparthparekhxx/"} TEXT={<img alt={"Linked in Profile"} style={{ height: "1.2em", backgroundColor: "white" }} src='/linkedin.png'></img>}></NavbarItem>
                    </div>
                </nav>
            </div>

        </header>
        <div style={{ height: "100px" }}>
        </div>
        <div style={{
            // overflow: "scroll"
        }}>
            {children}
        </div>


    </Head>
    
    )
}
