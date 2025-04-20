import SlideTabs from "./slidetabs";

interface AnimatedNavbarPropsTypes {
  navLinks: { name: string; href: string; className?: string }[];
  className?: string;
}

function AnimatedNavbar({ navLinks, className }: AnimatedNavbarPropsTypes) {
  return (
    <div className={`h-auto ${className ?? ""}`}>
      <SlideTabs navLinks={navLinks} />
    </div>
  );
}

export { AnimatedNavbar };
