import { ProductCard } from "@/components/lazyui/productcard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper, Step } from "@/components/ui/stepper";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const steps: Step[] = [
  {
    title: "Add ProductCard Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/productcard.json`,
  },
  {
    title: "Import ProductCard component",
    content: "",
    code: `import { ProductCard } from "@/components/ui/productcard";`,
  },
];

export default function ProductCardDemo() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">ProductCard</h1>

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
          <div className="h-[450px] border rounded-lg overflow-hidden shadow-sm relative flex items-center justify-center">
            <ProductCard
              name="Modern Product"
              price={49.99}
              oldPrice={79.99}
              rating={4.5}
              image="https://placehold.co/600x400/EEE/31343C"
              onBuy={() => alert("Buy Now clicked!")}
            />
          </div>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<ProductCard
  name="Modern Product"
  price={49.99}
  oldPrice={79.99}
  rating={4.5}
  image="https://placehold.co/600x400/EEE/31343C"
  onBuy={() => alert("Buy Now clicked!")}
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>ProductCard</code>
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
              <code>name</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"Modern Product"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>price</code>
            </TableCell>
            <TableCell>
              <code>number</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>49.99</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>oldPrice</code>
            </TableCell>
            <TableCell>
              <code>number</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>79.99</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>rating</code>
            </TableCell>
            <TableCell>
              <code>number</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>4.5</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>image</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"https://placehold.co/600x400/EEE/31343C"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>onBuy</code>
            </TableCell>
            <TableCell>
              <code>function</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>function</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
