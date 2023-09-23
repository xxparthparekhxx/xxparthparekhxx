export type Stack = {
  id: number;
  img: string;
  name: string;
  creator: string;
};

export type ProjectMedia = {
  id: number;
  is_image: boolean;
  is_logo: boolean;
  img: string | null;
  video: string | null;
  description_for_alt: string;
};

export type Project = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  description: string;
  github_url: string;
  hosted_url: string;
  completed: boolean;
  description_page_html: string;
  stacks: Stack[];
  medias: ProjectMedia[];
};

export type Post = {
  id: number;
  title: string;
  content: string;
  metadata:string; 
  Media: ProjectMedia[];
  date_posted: string;
  categories: Stack[];
};

export type Contact = {
  id?: number; // Assuming the model has an auto-generated ID
  name: string;
  email: string;
  reason: string;
  date_posted: Date;
};

export type ContactInput = {
  name: string;
  email: string;
  reason: string;
  // Notice we're not including date_posted here since it's auto_now_add in your Django model
};

export const ContactInputFactory = (
  name: string,
  email: string,
  reason: string
) => {
  return {
    name,
    email,
    reason,
  } as ContactInput;
};
