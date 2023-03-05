export type Stack = {
  id: number;
  img: string;
  name: string;
  creator: string;
};

export type ProjectMedia = {
  id: number;
  is_image: boolean;
  img: string | null;
  video: string | null;
  description_for_alt: string;
};

export type Project = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  description:string;
  github_url:string;
  hosted_url:string;
  completed: boolean;
  description_page_html:string;
  stacks: Stack[];
  medias: ProjectMedia[];
};

export type Post = {
  id: number;
  title: string;
  content: string;
  media: ProjectMedia[];
  date_posted: string;
  categories: Stack[];
};
