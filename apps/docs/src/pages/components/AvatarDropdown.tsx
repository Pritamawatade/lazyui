import { AvatarDropdown } from "@/components/lazyui/avatardropdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, LogOut } from "lucide-react";

const steps: Step[] = [
  {
    title: "Add Avatar Dropdown Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/avatardropdown.json`,
  },
  {
    title: "Import Avatar Dropdown Component",
    content: "",
    code: `import { AvatarDropdown } from "@/components/ui/avatardropdown";`,
  },
];

export default function AvatarDropdownDemo() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 flex items-center justify-center gap-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Avatar Dropdown</h1>

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
            <AvatarDropdown
              user={{ name: "John Doe", email: "john@example.com" }}
              menuItems={[
                { label: "Profile", icon: User },
                { label: "Logout", icon: LogOut },
              ]}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">JD</div>
            </AvatarDropdown>
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<AvatarDropdown
  user={{ name: 'John Doe', email: 'john@example.com' }}
  menuItems={[
    { label: 'Profile', icon: User },
    { label: 'Logout', icon: LogOut },
  ]}
>
  <div className='w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center'>JD</div>
</AvatarDropdown>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>AvatarDropdown</code>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Prop</TableHead>
            <TableHead className="w-[180px]">Type</TableHead>
            <TableHead className="w-[100px]">Required</TableHead>
            <TableHead className="w-[150px]">Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <code>user</code>
            </TableCell>
            <TableCell>
              <code>{`{ name?: string; email?: string }`}</code>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              <code>{`{}`}</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>menuItems</code>
            </TableCell>
            <TableCell>
              <code>{`{ label: string; icon?: React.ComponentType<{ className?: string }> }[]`}</code>
            </TableCell>
            <TableCell>false</TableCell>
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
            <TableCell>false</TableCell>
            <TableCell>
              <code>""</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>children</code>
            </TableCell>
            <TableCell>
              <code>ReactNode</code>
            </TableCell>
            <TableCell>true</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
