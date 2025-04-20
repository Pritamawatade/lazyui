import { DropDownMenu } from "@/components/lazyui/dropdownmenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add DropDownMenu Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/dropdownmenu.json`,
  },
  {
    title: "Import DropDownMenu component",
    content: "",
    code: `import { DropDownMenu } from '@/components/ui/dropdownmenu';`,
  },
];

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function DropDownMenuDemo() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex items-center justify-center gap-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">DropDown Menu</h1>

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
            <DropDownMenu menuItems={menuItems} />
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<DropDownMenu menuItems={[{ name: 'Home', href: '#' }, { name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }]} />`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>DropDownMenu</code>
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
              <code>menuItems</code>
            </TableCell>
            <TableCell>
              <code>{`{ name: string; href: string; className?: string }[]`}</code>
            </TableCell>
            <TableCell>
              <code>true</code>
            </TableCell>
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
            <TableCell>
              <code>false</code>
            </TableCell>
            <TableCell>
              <code>""</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
