import { RevealCardsGrid } from "@/components/lazyui/revealcardsgrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add RevealCardsGrid Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/revealcardsgrid.json`,
  },
  {
    title: "Import RevealCardsGrid component",
    content: "",
    code: `import { RevealCardsGrid } from "@/components/ui/revealcardsgrid";`,
  },
];

export default function RevealCardsGridDemo() {
  const cards = [
    {
      title: "Card 1",
      subtitle: "Subtitle 1",
      image: "https://placehold.co/300x300/EEE/31343C",
      description: "This is a description for card 1.",
      buttonText: "Click Me",
    },
    {
      title: "Card 2",
      subtitle: "Subtitle 2",
      image: "https://placehold.co/300x300/EEE/31343C",
      description: "This is a description for card 2.",
    },
    {
      title: "Card 3",
      subtitle: "Subtitle 3",
      image: "https://placehold.co/300x300/EEE/31343C",
      description: "This is a description for card 3.",
      buttonText: "Learn More",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">RevealCardsGrid</h1>

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
          <div className="h-[450px] border rounded-lg overflow-hidden shadow-sm relative">
            <RevealCardsGrid cards={cards} />
          </div>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<RevealCardsGrid
  cards={[
    {
      title: "Card 1",
      subtitle: "Subtitle 1",
      image: "https://placehold.co/300x300/EEE/31343C",
      description: "This is a description for card 1.",
      buttonText: "Click Me",
    },
    {
      title: "Card 2",
      subtitle: "Subtitle 2",
      image: "https://placehold.co/300x300/EEE/31343C",
      description: "This is a description for card 2.",
    },
    {
      title: "Card 3",
      subtitle: "Subtitle 3",
      image: "https://placehold.co/300x300/EEE/31343C",
      description: "This is a description for card 3.",
      buttonText: "Learn More",
    },
  ]}
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>RevealCardsGrid</code>
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
              <code>cards</code>
            </TableCell>
            <TableCell>
              <code>Object(title: string; subtitle: string; image: string; description: string; buttonText?: string)[]</code>
            </TableCell>
            <TableCell>Yes</TableCell>
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
            <TableCell>No</TableCell>
            <TableCell>
              <code>undefined</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
