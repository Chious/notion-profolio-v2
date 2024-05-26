import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";

const notionSecret = process.env.NOTION_API_SECRET;
const notionBlickId = process.env.BLOCK_ID;

const notion = new Client({ auth: notionSecret });
const n2m = new NotionToMarkdown({
  notionClient: notion,
});

export default async function handler(req, res) {
  if (!notionSecret || !notionBlickId) {
    throw new Error("Missing notion secret or Block-ID.");
  }

  /*
  const mdblock = await n2m.pageToMarkdown(notionBlickId);
  const mdString = mdblock.toString();
  const slug = "article";
  const filename = "post.md";
  const path = `./public/${slug}/${filename}`;
  fs.writeFile(path, mdString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
*/

  const { results } = await notion.blocks.children.list({
    block_id: notionBlickId,
  });

  //convert to markdown
  const x = await n2m.blocksToMarkdown(results);
  console.log(x);

  res.status(200).json(x);
}
