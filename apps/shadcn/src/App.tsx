import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

function App() {
  // useState hook to manage the list of all components
  const [allComponents, setAllComponents] = useState<{ name: string; title: string }[]>([]);

  // useEffect for fetching all components from the registry
  useEffect(() => {
    fetch("https://lazy-ui-test.vercel.app/registry/allcomponents.json")
      .then((response) => response.json())
      .then((data) => setAllComponents(data));
  }, []);

  // useState hook to manage the selected component
  const [component, setComponent] = useState<string>("No component is selected!");

  // useState hook to manage the icon for the copy button
  const [icon, setIcon] = useState<React.ReactElement>(<Copy />);

  // function to handle the copy url and show response to the user
  function handleCopy() {
    navigator.clipboard.writeText(component).then(() => {
      setIcon(<Check />);
      setTimeout(() => setIcon(<Copy />), 1000);
    });
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="flex flex-col gap-2 items-center justify-center w-[80%] sm:w-auto">
        <h2 className="text-4xl font-bold break-all text-wrap">Shadcn Registry | Lazy UI</h2>
        <Separator />
      </div>
      <section className="flex flex-col gap-4 items-center justify-center">
        <Select onValueChange={(value) => setComponent(`npx shadcn@latest add https://www.lazyui.online/registry/${value}.json`)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select a component" />
          </SelectTrigger>
          <SelectContent>
            {allComponents.map((comp) => (
              <SelectItem key={comp.name} value={comp.name}>
                {comp.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Alert className="flex flex-row items-center justify-center gap-2 w-[90%] sm:w-full">
          <AlertDescription className="break-all text-wrap">{component}</AlertDescription>
          <Button disabled={component === "No component is selected!"} variant="outline" size="icon" className="cursor-pointer" onClick={handleCopy}>
            {icon}
          </Button>
        </Alert>
      </section>
    </div>
  );
}

export default App;
