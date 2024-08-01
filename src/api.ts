const API_URL = "https://api.parthp.in/project/";

import { Company, Contact, ContactInput, Post, Project, ProjectMedia, Stack, WorkExperience } from "./models";

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
  const response = await fetch(API_URL + "projects/")
  console.log(response)
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



export const createContact = async (contact: ContactInput): Promise<Contact> => {
  const response = await fetch(API_URL + "contact/create/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  });

  if (!response.ok) {
    throw new Error("Error creating contact");
  }

  const createdContact = await response.json();
  return createdContact;
};

// New API functions for Company
export const fetchCompanies = async (): Promise<Company[]> => {
  const response = await fetch(API_URL + "companies/");
  const companies = await response.json();
  return companies;
};

export const fetchCompanyById = async (id: number): Promise<Company> => {
  const response = await fetch(API_URL + `companies/${id}/`);
  const company = await response.json();
  return company;
};

// New API functions for WorkExperience
export const fetchWorkExperiences = async (): Promise<WorkExperience[]> => {
  const response = await fetch(API_URL + "work-experiences/");
  const workExperiences = await response.json();
  return workExperiences;
};

export const fetchWorkExperienceById = async (id: number): Promise<WorkExperience> => {
  const response = await fetch(API_URL + `work-experiences/${id}/`);
  const workExperience = await response.json();
  return workExperience;
};

export const fetchProjectsByCompany = async (companyId: number): Promise<Project[]> => {
  const response = await fetch(API_URL + `companies/${companyId}/projects/`);
  const projects = await response.json();
  return projects;
};

export const fetchWorkExperiencesByCompany = async (companyId: number): Promise<WorkExperience[]> => {
  const response = await fetch(API_URL + `companies/${companyId}/work-experiences/`);
  const workExperiences = await response.json();
  return workExperiences;
};