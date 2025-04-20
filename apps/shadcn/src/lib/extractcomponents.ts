import fs from "fs/promises";
import registry from "../../registry.json";

const arr: { name: string; title: string; description: string }[] = registry.items.map((item) => ({ name: item.name, title: item.title, description: item.description }));

await fs.writeFile("./public/allcomponents.json", JSON.stringify(arr, null, 2));
