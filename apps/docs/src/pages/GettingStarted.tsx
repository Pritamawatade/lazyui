import { Stepper, Step } from "@/components/ui/stepper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/lazyui/avatar";

const steps: Step[] = [
  {
    title: "Install Prerequisites",
    content: "Before you begin with components, make sure following things are installed and configured:",
    items: [
      {
        name: "Node.js",
        href: "https://nodejs.org/en/download",
      },
      {
        name: "React.js",
        href: "https://react.dev",
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/docs/installation/using-vite",
      },
      {
        name: "Shadcn UI",
        href: "https://ui.shadcn.com/docs/installation",
      },
    ],
  },
  {
    title: "Add components from shadcn cli",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/avatar.json`,
  },
  {
    title: "Import and start using the component",
    content: "",
    code: `import { Avatar } from "@/components/ui/avatar";`,
  },
];

export default function GettingStarted() {
  return (
    <>
      <title>Getting Started | Lazy UI</title>
      <meta name="description" content="Getting Started page of Lazy UI docs" />
      <section className="w-full max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Getting Started</h1>
        <Stepper steps={steps} />
        <div className="w-full mt-8">
          <Tabs defaultValue="preview" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger className="cursor-pointer" value="preview">
                Preview
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="code">
                Code
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <AspectRatio ratio={16 / 9} className="w-full p-4 flex items-start justify-center">
                <Avatar size="md" variant="default" initials="LZ" rounded="full" />
              </AspectRatio>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
                <code>{`<Avatar size = 'md' variant = 'default' initials="LZ" rounded = 'full'/>`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
