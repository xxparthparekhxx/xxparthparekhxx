import Head from 'next/head'
import { Navbar } from '../components/NavBar/Navbar'
import { Hero } from '../components/Work/Hero'
import Stack from "../components/models/Stack"
import ProjectCard from "../components/models/Projects"

import { fetchProjects, fetchProjectsByStack, fetchStacks } from "../src/api"
import { useEffect, useState } from 'react'
export default function Home({ stacks, allProjects }) {
  const [SelectedStack, setSelectedStack] = useState(null)
  const [Projects, setProjects] = useState(allProjects)

  useEffect(() => {
    const x = async () => {
      if (SelectedStack != null) {
        setProjects(await fetchProjectsByStack(SelectedStack))
      }
    }
    x()

  }, [SelectedStack])



  return (
    <Navbar>
      <Hero />
      <p style={{

        display: "flex",
        padding: "2em",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        fontSize: "200%", opacity: .6
      }}>
        <i>
          &quot; Fullstack Developer and AI Student at Georgian College with a Drive for Creating Cutting-Edge Applications &quot;
        </i>

      </p>
      <div style={{
        padding: "2em",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"

      }}>
        <h2 style={{
          marginBottom: "1em"
        }}>
          My Stack
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>

          {
            stacks.map(e => <Stack key={e.id} {...e} setStackSort={setSelectedStack} selected={e.id === SelectedStack}></Stack>)
          }

        </div>
        <h2 style={{
          margin: "1em"
        }}>
          My Projects
        </h2>
        {
          Projects.map(e => <ProjectCard project={e}></ProjectCard>
          )
        }
      </div>


    </Navbar>
  )
}

export async function getServerSideProps(context) {
  const Stacks = await fetchStacks()
  const allProjects = await fetchProjects()

  return {
    props: {
      stacks: Stacks,
      allProjects
    }
  }
}