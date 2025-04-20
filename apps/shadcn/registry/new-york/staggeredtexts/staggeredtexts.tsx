import { motion } from "framer-motion";

interface StaggeredTextsPropsTypes {
  staggeredTextsLinks: {
    name: string;
    href: string;
    className?: string;
  }[];
  className?: string;
}

interface FlipLinkPropsTypes {
  children: string;
  href: string;
  classes: string;
}

export const StaggeredTexts = ({ staggeredTextsLinks, className }: StaggeredTextsPropsTypes) => {
  return (
    <section className={`grid place-content-center gap-2 bg-gradient-to-bl h-lvh from-lime-300 to-sky-400 px-8 py-24 text-black ${className ?? ""}`}>
      {staggeredTextsLinks.map((link, i) => (
        <FlipLink classes={link.className ?? "sm:text-7xl md:text-8xl lg:text-9xl"} key={i} href={link.href}>
          {link.name}
        </FlipLink>
      ))}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, classes }: FlipLinkPropsTypes) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase ${classes}`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
