const API_URL = "https://xxparthparekhxx-backend.vercel.app/project/";

import { Post, Project, ProjectMedia, Stack } from "./models";

// Fetch all stacks
export const fetchStacks = async (): Promise<Stack[]> => {
  const response = await fetch(API_URL + "stacks/");
  const stacks = await response.json();
  return stacks;
};

// Fetch a single stack by ID
export const fetchStackById = async (id: number): Promise<Stack> => {
  const response = await fetch(API_URL + `stacks/${id}/`);
  const stack = await response.json();
  return stack;
};

// Fetch all project media
export const fetchProjectMedia = async (): Promise<ProjectMedia[]> => {
  const response = await fetch(API_URL + "project-media/");
  const projectMedia = await response.json();
  return projectMedia;
};

// Fetch a single project media by ID
export const fetchProjectMediaById = async (
  id: number
): Promise<ProjectMedia> => {
  const response = await fetch(API_URL + `project-media/${id}/`);
  const projectMedia = await response.json();
  return projectMedia;
};

// Fetch all projects
export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(API_URL + "projects/");
  console.log(await response.body?.getReader().read());
  const projects = await response.json();
  return projects;
};

// Fetch a single project by ID
export const fetchProjectById = async (id: number): Promise<Project> => {
  const response = await fetch(API_URL + `projects/${id}/`);
  const project = await response.json();
  return project;
};

// Fetch all posts
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(API_URL + "posts/");
  const posts = await response.json();
  return posts;
};

// Fetch a single post by ID
export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await fetch(API_URL + `posts/${id}/`);
  const post = await response.json();
  return post;
};

export async function fetchProjectsByStack(
  stackId: number
): Promise<Project[]> {
  const response = await fetch(API_URL +`stacks/${stackId}/projects/`);
  const data = await response.json();
  return data as Project[];
}
