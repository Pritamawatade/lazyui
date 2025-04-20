import { GroupAvatar } from "@/components/lazyui/groupavatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add GroupAvatar Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/groupavatar.json`,
  },
  {
    title: "Import GroupAvatar component",
    content: "",
    code: `import { GroupAvatar } from "@/components/ui/groupavatar";`,
  },
];

const demoUsers = [{ imageUrl: "https://i.pravatar.cc/150?img=1" }, { initials: "XY" }, { imageUrl: "https://i.pravatar.cc/150?img=2" }, { initials: "ZT" }];

export default function GroupAvatarDemo() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex items-center justify-center gap-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Group Avatar</h1>

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
            <GroupAvatar users={demoUsers} maxCount={4} size="md" />
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<GroupAvatar
  users={[
    { imageUrl: "https://i.pravatar.cc/150?img=1" },
    { imageUrl: "https://i.pravatar.cc/150?img=2" },
    { initials: "XY" },
    { imageUrl: "https://i.pravatar.cc/150?img=3" },
    { initials: "ZT" },
  ]}
  maxCount={4}
  size="md"
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>GroupAvatar</code>
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
              <code>users</code>
            </TableCell>
            <TableCell>
              <code>{`{ imageUrl?: string; initials?: string }[]`}</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>[]</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>maxCount</code>
            </TableCell>
            <TableCell>
              <code>number</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>4</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>size</code>
            </TableCell>
            <TableCell>
              <code>"sm" | "md" | "lg"</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"md"</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
