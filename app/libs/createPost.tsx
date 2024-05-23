import fs from "fs";
import path from "path";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notionSecret = process.env.NOTION_API_SECRET;

const notion = new Client({ auth: notionSecret });
const n2m = new NotionToMarkdown({
  notionClient: notion,
});

const POSTS_DIR = path.join(process.cwd(), "posts");

export async function createPosts(posts: any[]) {
  for (const post of posts) {
    const uuid = post.id;
    const slug = "example-file-name";
    const mdblocks = await n2m.pageToMarkdown(uuid);
    const mdString = n2m.toMarkdownString(mdblocks).toString(); // Convert mdString to string

    const filename = `/${POSTS_DIR}/${slug}.mdx`;

    fs.writeFile(filename, mdString, (err) => {
      err !== null && console.log(err);
    });
  }
}
