import Head from 'next/head'
import cookieCutter from "cookie-cutter"
import { getUser } from '../server/middelwares/useUser'
import { Navbar } from '../components/NavBar/Navbar'
import Hero from '../components/Work/Hero'
export default function Home({name}) {
  return (
    <>
      <Navbar>
        <Hero />
      </Navbar>
    </>
  )
}

export async function getServerSideProps(context) {
  const user = getUser(context)
  console.log(user)
  // ...
  return { 
    props:{
      // name:"Lode"
    }
  }
  
}