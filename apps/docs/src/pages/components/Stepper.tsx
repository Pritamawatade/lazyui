import { Stepper as CodeStepper } from "@/components/ui/stepper";
import { Stepper } from "@/components/lazyui/stepper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const setupSteps = [
  {
    title: "Add Stepper Component",
    content: "",
    code: `npx shadcn@latest add https://www.lazyui.online/registry/stepper.json`,
  },
  {
    title: "Import Stepper component",
    content: "",
    code: `import { Stepper } from "@/components/lazyui/stepper";`,
  },
];

const demoSteps = [
  {
    name: "Customer Info",
    component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Enter your Shipping details</div>,
  },
  {
    name: "Payment",
    component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Your order has been delivered</div>,
  },
];

export default function StepperDemo() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center">Stepper</h1>

      <CodeStepper steps={setupSteps} />

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
            <Stepper stepsConfig={demoSteps} />
          </AspectRatio>
        </TabsContent>

        <TabsContent value="code">
          <pre className="bg-black/50 p-4 rounded text-sm text-slate-300 overflow-x-auto">
            <code>{`<Stepper
  stepsConfig={[
    {
      name: "Customer Info",
      component: () => <div>Provide your contact details</div>,
    },
    {
      name: "Shipping Info",
      component: () => <div>Enter your Shipping details</div>,
    },
    {
      name: "Payment",
      component: () => <div>Complete payment for your order</div>,
    },
    {
      name: "Delivered",
      component: () => <div>Your order has been delivered</div>,
    },
  ]}
/>`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <Table>
        <TableCaption>
          Props for <code>Stepper</code>
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
              <code>stepsConfig</code>
            </TableCell>
            <TableCell>
              <code>&#123; name: string; component: () =&gt; JSX.Element; &#125;[]</code>
            </TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>
              <code>[]</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>orientation</code>
            </TableCell>
            <TableCell>
              <code>"horizontal" | "vertical"</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>"horizontal"</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>initialStep</code>
            </TableCell>
            <TableCell>
              <code>number</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>0</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>onStepChange</code>
            </TableCell>
            <TableCell>
              <code>(stepIndex: number) =&gt; void</code>
            </TableCell>
            <TableCell>No</TableCell>
            <TableCell>
              <code>() =&gt; {}</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
