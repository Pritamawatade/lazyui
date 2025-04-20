import { SpeedDial } from "@/components/lazyui/speeddial";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add SpeedDial Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/speeddial.json`,
  },
  {
    title: "Import SpeedDial component",
    content: "",
    code: `import { SpeedDial } from "@/components/ui/speeddial";`,
  },
];

export default function SpeedDialDemo() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">SpeedDial</h1>

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
          <div className="h-[500px] border rounded-lg overflow-hidden shadow-sm relative">
            <SpeedDial />
          </div>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<SpeedDial positionedAt=\"right\" />`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>SpeedDial</code>
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
              <code>positionedAt</code>
            </TableCell>
            <TableCell>
              <code>"top" | "bottom" | "left" | "right"</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"right"</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
