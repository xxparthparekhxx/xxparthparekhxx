import Head from 'next/head'
import { Navbar } from '../components/NavBar/Navbar'
import { Hero } from '../components/Work/Hero'
import StackView from "../components/models/Stack"
import ProjectCard from "../components/models/Projects"
import { fetchProjects, fetchProjectsByStack, fetchStacks } from "../src/api"
import { useEffect, useState } from 'react'
import { Project, Stack } from '../src/models'
import { LeftRight } from '../components/eye/CurveFunctions'
export default function Home({ stacks, allProjects }:{stacks:Stack[],allProjects:Project[]}) {

  const [SelectedStack, setSelectedStack] = useState<number| null>(null)
  const [Projects, setProjects] = useState(allProjects)
  const [ProjectsLoading , setProjectsLoading ] = useState(false)

  useEffect(() => {
    const x = async () => {
      if (SelectedStack != null) {
        setProjectsLoading(true)
        setProjects([])
        setProjects(await fetchProjectsByStack(SelectedStack))
        setProjectsLoading(false)
      }
    }
    x()

  }, [SelectedStack])



  return (
    <Navbar>
      <Hero />
  
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
          Tech I Work With
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>

          {
            stacks.map((e:Stack) => <StackView iconOnly={false} key={e.id} {...e} setStackSort={(e)=>setSelectedStack(e)} selected={e.id === SelectedStack}></StackView>)
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
          flexBasis:'center',
        }}>
        {
          Projects.map(e => <ProjectCard key={e.id} project={e}></ProjectCard>
          )
        }
        </div>
        {
          ProjectsLoading && <div>
            <LeftRight></LeftRight>
          </div>
        }

        {
          (Projects.length == 0  && !ProjectsLoading ) && <div>
            No Projects Found
            </div>
        }
      </div>


    </Navbar>
  )
}

export async function getStaticPaths(context:any) {
  const [Stacks, allProjects] = await Promise.all([fetchStacks(), fetchProjects()])

  return {
    props: {
      stacks: Stacks,
      allProjects
    }
  }
}