import { StatusAvatar } from "@/components/lazyui/statusavatar";
import { Avatar } from "@/components/lazyui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const steps: Step[] = [
  {
    title: "Add StatusAvatar Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/statusavatar.json`,
  },
  {
    title: "Import StatusAvatar component",
    content: "",
    code: `import { StatusAvatar } from "@/components/lazyui/statusavatar";`,
  },
];

export default function StatusAvatarDemo() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">StatusAvatar</h1>

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
          <AspectRatio ratio={4} className="w-full p-4 flex items-center justify-center gap-4">
            <StatusAvatar status="online">
              <Avatar initials="LZ" />
            </StatusAvatar>
            <StatusAvatar status="away">
              <Avatar initials="LZ" />
            </StatusAvatar>
            <StatusAvatar status="busy">
              <Avatar initials="LZ" />
            </StatusAvatar>
            <StatusAvatar status="offline">
              <Avatar initials="LZ" />
            </StatusAvatar>
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<StatusAvatar status="online">
  <Avatar initials="LZ" />
</StatusAvatar>
<StatusAvatar status="away">
  <Avatar initials="LZ" />
</StatusAvatar>
<StatusAvatar status="busy">
  <Avatar initials="LZ" />
</StatusAvatar>
<StatusAvatar status="offline">
  <Avatar initials="LZ" />
</StatusAvatar>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>StatusAvatar</code>
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
              <code>status</code>
            </TableCell>
            <TableCell>
              <code>"online" | "busy" | "away" | "offline"</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"online"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>position</code>
            </TableCell>
            <TableCell>
              <code>"top-right" | "top-left" | "bottom-right" | "bottom-left"</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"bottom-right"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>children</code>
            </TableCell>
            <TableCell>
              <code>ReactNode</code>
            </TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>
              <code>—</code>
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
              <code>""</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
