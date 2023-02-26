import Head from 'next/head'
import { Navbar } from '../components/NavBar/Navbar'
import { Hero } from '../components/Work/Hero'
import ProjectGrid from '../components/project/Grid'

export default function Home() {
  return (
    <Navbar>
      <Hero />
      <p style={{
        
        display:"flex",
        padding:"2em",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        textAlign:"center",
        fontSize:"200%",opacity:.6
      }}>
        <i>
        "Fullstack Developer and AI Student at Georgian College with a Drive for Creating Cutting-Edge Applications"
        </i>
      </p>
      <ProjectGrid></ProjectGrid>

    </Navbar>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}