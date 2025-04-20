import { Button } from "@/components/lazyui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add Button Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/button.json`,
  },
  {
    title: "Import Button component",
    content: "",
    code: `import { Button } from "@/components/ui/button";`,
  },
];

export default function ButtonSimpleDemo() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex items-center justify-center gap-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Simple Button</h1>

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
            <Button variant="primary" size="medium" onClick={() => alert("Button clicked!")}>
              Click Me
            </Button>
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<Button variant="primary" size="medium">Click Me</Button>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>Button</code>
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
              <code>variant</code>
            </TableCell>
            <TableCell>
              <code>"primary" | "secondary" | "danger" | "success"</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"primary"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>size</code>
            </TableCell>
            <TableCell>
              <code>"small" | "medium" | "large"</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"medium"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>children</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>
              <code>true</code>
            </TableCell>
            <TableCell>
              <code>"Click Me"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>onClick</code>
            </TableCell>
            <TableCell>
              <code>React.FunctionComponent</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>undefined</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>disabled</code>
            </TableCell>
            <TableCell>
              <code>boolean</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>className</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>""</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>...props</code>
            </TableCell>
            <TableCell>
              <code>HTMLMotionProps&lt;"button"&gt;</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>-</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
