import React, { useState } from 'react'
import { Head } from '../header'
import { flex } from '../../styles/flex'
import { NavbarItem } from './Item'
import { GetBlackChild } from "../eye/getBlackChield"
import { useEyeContext } from '../../context/EyeContext'
export const Navbar = (props) => {

    return (<Head>

        <header style={{
            position: 'fixed',
            display: "block",
        }}>

            <div >
                <nav style={{ ...flex('row'), width: "100vw", justifyContent: "space-between", paddingLeft: "1.75em", paddingRight: "1.75em" }}>

                    <div style={{ ...flex("row") }}>
                        <NavbarItem TEXT={"Work"} />
                        <NavbarItem TEXT={"About"} />
                        <NavbarItem TEXT={"Blog"} />
                        <NavbarItem TEXT={"Contact"} />
                    </div>
                    <div style={{ padding: 10 }}>
                        <GetBlackChild></GetBlackChild>
                    </div>
                    <div style={flex("row")}>
                        <NavbarItem blank TO={"https://github.com/xxparthparekhxx"} TEXT={<img style={{ height: "1.2em" }} src='/github-mark-white.svg'></img>}></NavbarItem>
                        <NavbarItem blank TO={"https://www.linkedin.com/in/xxparthparekhxx/"} TEXT={<img style={{ height: "1.2em", backgroundColor: "white" }} src='/linkedin.png'></img>}></NavbarItem>
                    </div>
                </nav>
            </div>

        </header>
        <div style={{ height: "80px" }}>
        </div>
        <div style={{
            height: "80vh",
            overflow: "scroll"
        }}>
            {props.children}
        </div>


    </Head>)
}
