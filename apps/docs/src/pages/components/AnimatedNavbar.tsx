import { AnimatedNavbar } from "@/components/lazyui/animatednavbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add Animated Navbar Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/animatednavbar.json`,
  },
  {
    title: "Import Animated Navbar Component",
    content: "",
    code: `import { AnimatedNavbar } from "@/components/ui/animatednavbar";`,
  },
];

export default function AnimatedNavbarDemo() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex items-center justify-center gap-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Animated Navbar</h1>

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
            <AnimatedNavbar
              navLinks={[
                {
                  name: "Home",
                  href: "#",
                },
                {
                  name: "About",
                  href: "#",
                },
                {
                  name: "Services",
                  href: "#",
                },
                {
                  name: "Contact",
                  href: "#",
                },
              ]}
            />
          </AspectRatio>
        </TabsContent>
        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<AnimatedNavbar navLinks={[
                  { name: "Home", href: "#"},
                  { name: "About", href: "#"},
                  { name: "Services", href: "#"},
                  { name: "Contact", href: "#"},
                ]}
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>AnimatedNavbar</code>
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
              <code>navLinks</code>
            </TableCell>
            <TableCell>
              <code>{`{ name: string; href: string; className?: string }[]`}</code>
            </TableCell>
            <TableCell>true</TableCell>
            <TableCell>-</TableCell>
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
        </TableBody>
      </Table>
    </section>
  );
}
