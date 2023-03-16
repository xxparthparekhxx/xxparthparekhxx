import Head from 'next/head'
import { Navbar } from '../components/NavBar/Navbar'
import { Hero } from '../components/Work/Hero'
import StackView from "../components/models/Stack"
import ProjectCard from "../components/models/Projects"

import { fetchProjects, fetchProjectsByStack, fetchStacks } from "../src/api"
import { useEffect, useState } from 'react'
import { Project, Stack } from '../src/models'
export default function Home({ stacks, allProjects }:{stacks:Stack[],allProjects:Project[]}) {
  const [SelectedStack, setSelectedStack] = useState<number| null>(null)
  const [Projects, setProjects] = useState(allProjects)
  const [ProjectsLoading , setProjectsLoading ] = useState(false)

  useEffect(() => {
    const x = async () => {
      if (SelectedStack != null) {
        setProjectsLoading(true)
        setProjects(await fetchProjectsByStack(SelectedStack))
        setProjectsLoading(false)
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
            stacks.map((e:Stack) => <StackView key={e.id} {...e} setStackSort={(e)=>setSelectedStack(e)} selected={e.id === SelectedStack}></StackView>)
          }

        </div>
        <h2 style={{
          margin: "1em"
        }}>
          My Projects
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
        {
          Projects.map(e => <ProjectCard key={e.id} project={e}></ProjectCard>
          )
        }
        </div>
        {
          ProjectsLoading && <div>
            loading
          </div>
        }

        {
          (Projects.length == 0  && !ProjectsLoading ) && <div>
            no Projects found on this stack I might have forgot to put in the data at the backend 
          </div>
        }
      </div>


    </Navbar>
  )
}

export async function getServerSideProps(context:any) {
  const [Stacks, allProjects] = await Promise.all([fetchStacks(), fetchProjects()])

  return {
    props: {
      stacks: Stacks,
      allProjects
    },
  }
}