import { Avatar } from "@/components/lazyui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add Avatar Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/avatar.json`,
  },
  {
    title: "Import Avatar Component",
    content: "",
    code: `import { Avatar } from "@/components/ui/avatar";`,
  },
];

export default function AvatarDemo() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex items-center justify-center gap-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Avatar</h1>

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
          <AspectRatio ratio={4} className="w-full p-4 flex items-center justify-center">
            <Avatar initials="JS" size="lg" variant="gradient" />
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<Avatar initials="JS" size="lg" variant="gradient" />`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>Avatar</code>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Prop</TableHead>
            <TableHead className="w-[120px]">Type</TableHead>
            <TableHead className="w-[100px]">Required</TableHead>
            <TableHead className="w-[150px]">Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <code>size</code>
            </TableCell>
            <TableCell>
              <code>"xs" | "sm" | "md" | "lg" | "xl"</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              <code>"md"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>variant</code>
            </TableCell>
            <TableCell>
              <code>"default" | "gradient" | "bordered" | "soft"</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              <code>"default"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>imageUrl</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>imageUrl || initials</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>initials</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>initials || imageUrl</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>className</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              <code>""</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>rounded</code>
            </TableCell>
            <TableCell>
              <code>"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              <code>"full"</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
