import { StaggeredTexts } from "@/components/lazyui/staggeredtexts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add StaggeredTexts Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/staggeredtexts.json`,
  },
  {
    title: "Import StaggeredTexts component",
    content: "",
    code: `import { StaggeredTexts } from "@/components/lazyui/staggeredtexts";`,
  },
];

export default function StaggeredTextsDemo() {
  const links = [
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">StaggeredTexts</h1>

      <Stepper steps={steps} />

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger className="cursor-pointer" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="code">
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="h-auto border rounded-lg overflow-hidden shadow-sm relative">
            <StaggeredTexts staggeredTextsLinks={links} />
          </div>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<StaggeredTexts
  staggeredTextsLinks={[
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ]}
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>StaggeredTexts</code>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Required</TableHead>
            <TableHead>Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <code>staggeredTextsLinks</code>
            </TableCell>
            <TableCell>
              <code>{`{ name: string; href: string; className?: string }[]`}</code>
            </TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>
              <code>[]</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>className</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>undefined</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
