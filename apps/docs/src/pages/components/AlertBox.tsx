import { AlertBox } from "@/components/lazyui/alertbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const steps: Step[] = [
  {
    title: "Add AlertBox Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/alertbox.json`,
  },
  {
    title: "Import AlertBox component",
    content: "",
    code: `import { AlertBox } from "@/components/ui/alertbox";`,
  },
];

export default function AlertBoxDemo() {
  const [show, setShow] = useState(false); // Start with the alert hidden
  const closeAlert = () => setShow(false); // Close alert function
  const showAlert = () => setShow(true); // Show alert function

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">AlertBox</h1>

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
            <button
              onClick={showAlert}
              className="bg-indigo-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-600 transition-colors flex items-center justify-center cursor-pointer"
            >
              Show AlertBox
            </button>
            <AlertBox type="success" title="Success!" message="Your operation was successful." onClose={closeAlert} show={show} />
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<AlertBox
  type="success"
  title="Success!"
  message="Your operation was successful."
  onClose={closeAlert}
  show={show}
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>AlertBox</code>
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
              <code>"info" | "success" | "warning" | "error"</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"info"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>title</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>undefined</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>message</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"This is an alert message."</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>onClose</code>
            </TableCell>
            <TableCell>
              <code>function</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>undefined</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>show</code>
            </TableCell>
            <TableCell>
              <code>boolean</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>autoDismiss</code>
            </TableCell>
            <TableCell>
              <code>boolean</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>false</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>dismissTime</code>
            </TableCell>
            <TableCell>
              <code>number</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>3000</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
