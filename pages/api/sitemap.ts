import { NextApiRequest, NextApiResponse } from 'next';
import {
  fetchProjects,
  fetchProjectsByStack,
  fetchStacks,
  fetchWorkExperiences,
  fetchPosts,
} from "../../src/api";


const DOMAIN = 'https://parthp.in'; // Your domain

function generateSitemapXml(pages:{loc:string,lastmod:string}[]) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${page.loc}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Method to get all of your site's pages
  const getAllPages = async () => {
    // This is where you'd fetch all your site's pages
    // For example, from your database or API

    let [projects, experiences, posts] = await Promise.all([
      await fetchProjects(),
      await fetchWorkExperiences(),
      await fetchPosts(),
    ]);
    let endpoints = [
      { url: "/", lastModified: new Date() },
      { url: "/Contact", lastModified: new Date() },
      { url: "/Blog", lastModified: new Date() },
      ...projects.map((e) => {
        return { url: "/Work/" + e.id, lastModified: new Date() };
      }),
      ...experiences.map((e) => {
        return { url: "/Experience/" + e.id, lastModified: new Date() };
      }),
      ...posts.map((e) => {
        return { url: "/Blog/" + e.id, lastModified: new Date() };
      }),
    ];

    return endpoints;
  };

  const pg = await getAllPages();

  const pages = pg.map((page) => ({
    loc: page.url, // Replace with your actual domain
    lastmod: page.lastModified.toISOString(),
    // You can add more fields like changefreq, priority, etc.
  }));

  return  res.status(200).send(generateSitemapXml(pages));
};
