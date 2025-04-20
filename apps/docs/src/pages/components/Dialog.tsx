import { Dialog } from "@/components/lazyui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const steps: Step[] = [
  {
    title: "Add Dialog Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/dialog.json`,
  },
  {
    title: "Import Dialog Component",
    content: "",
    code: `import { Dialog } from '@/components/ui/dialog'`,
  },
];

export default function DialogSimpleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center">Dialog</h1>

      <Stepper steps={steps} />

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <AspectRatio ratio={4} className="w-full p-4 flex items-center justify-center">
            <button onClick={() => setOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 cursor-pointer">
              Open Dialog
            </button>

            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              onConfirm={() => alert("Confirmed")}
              title="Confirm Action"
              description="Are you sure you want to proceed with this action?"
            />
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<Dialog
  open={open}
  onClose={() => setOpen(false)}
  onConfirm={() => alert("Confirmed")}
  title="Confirm Action"
  description="Are you sure you want to proceed with this action?"
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>Dialog</code>
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
              <code>type</code>
            </TableCell>
            <TableCell>
              <code>"default" | "info" | "success" | "warning" | "danger"</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"default"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>title</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"This is example title"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>description</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"This action can't be undone please choose wisly"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>open</code>
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
              <code>onClose</code>
            </TableCell>
            <TableCell>
              <code>function</code>
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
              <code>onConfirm</code>
            </TableCell>
            <TableCell>
              <code>function</code>
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
              <code>confirmText</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"Continue"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>cancelText</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>"Cancel"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>size</code>
            </TableCell>
            <TableCell>
              <code>"small" | "medium" | "large" | "xlarge" | "full"</code>
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
              <code>showCloseButton</code>
            </TableCell>
            <TableCell>
              <code>boolean</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>true</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>preventBackdropClose</code>
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
              <code>children</code>
            </TableCell>
            <TableCell>
              <code>React.ReactNode</code>
            </TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>undefined</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
