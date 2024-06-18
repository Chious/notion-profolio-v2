import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notionSecret = process.env.NOTION_API_SECRET;
const notionBlockId = "faa04b09e07349dc891b0be50f499720";

const notion = new Client({ auth: notionSecret });
const n2m = new NotionToMarkdown({
  notionClient: notion,
});

n2m.setCustomTransformer("embed", async (block) => {
  const { embed } = block;

  if (!embed?.url) return "";
  return `<figure>
  <iframe src="${embed?.url}"></iframe>
  <figcaption>${await n2m.blockToMarkdown(embed?.caption)}</figcaption>
</figure>`;
});

export default async function handler(req, res) {
  if (!notionSecret || !notionBlockId) {
    throw new Error("Missing notion secret or Block-ID.");
  }

  // get all blocks in the page
  const { results } = await notion.blocks.children.list({
    block_id: notionBlockId,
  });

  //convert to markdown
  const postJson = await n2m.blocksToMarkdown(results);

  let outputString = ``;

  postJson.forEach((obj) => {
    outputString += obj.parent + "\n";
  });

  res.status(200).json(outputString);
}
