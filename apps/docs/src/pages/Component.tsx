import { useParams } from "react-router-dom";
import {
  AlertBoxDemo,
  AnimatedNavbarDemo,
  AvatarDemo,
  AvatarDropdownDemo,
  ButtonDemo,
  DialogDemo,
  DropdownMenuDemo,
  GroupAvatarDemo,
  ProductCardDemo,
  RevealCardsGridDemo,
  SpeedDialDemo,
  StaggeredTextsDemo,
  StatusAvatarDemo,
  StepperDemo,
} from "./components";
import NotFound from "./NotFound";

const componentsMap = {
  alertbox: {
    title: "AlertBox | Lazy UI",
    description: "AlertBox Component of Lazy UI",
    component: AlertBoxDemo,
  },
  animatednavbar: {
    title: "Animated Navbar | Lazy UI",
    description: "Animated Navbar Component of Lazy UI",
    component: AnimatedNavbarDemo,
  },
  avatar: {
    title: "Avatar | Lazy UI",
    description: "Avatar Component of Lazy UI",
    component: AvatarDemo,
  },
  avatardropdown: {
    title: "Avatar Dropdown | Lazy UI",
    description: "Avatar Dropdown Component of Lazy UI",
    component: AvatarDropdownDemo,
  },
  button: {
    title: "Button | Lazy UI",
    description: "Button Component of Lazy UI",
    component: ButtonDemo,
  },
  dialog: {
    title: "Dialog | Lazy UI",
    description: "Dialog Component of Lazy UI",
    component: DialogDemo,
  },
  dropdownmenu: {
    title: "Dropdown Menu | Lazy UI",
    description: "Dropdown Menu Component of Lazy UI",
    component: DropdownMenuDemo,
  },
  groupavatar: {
    title: "Group Avatar | Lazy UI",
    description: "Group Avatar Component of Lazy UI",
    component: GroupAvatarDemo,
  },
  productcard: {
    title: "Product Card | Lazy UI",
    description: "Product Card Component of Lazy UI",
    component: ProductCardDemo,
  },
  revealcardsgrid: {
    title: "Reveal Cards Grid | Lazy UI",
    description: "Reveal Cards Grid Component of Lazy UI",
    component: RevealCardsGridDemo,
  },
  speeddial: {
    title: "Speed Dial | Lazy UI",
    description: "Speed Dial Component of Lazy UI",
    component: SpeedDialDemo,
  },
  staggeredtexts: {
    title: "Staggered Texts | Lazy UI",
    description: "Staggered Texts Component of Lazy UI",
    component: StaggeredTextsDemo,
  },
  statusavatar: {
    title: "Status Avatar | Lazy UI",
    description: "Status Avatar Component of Lazy UI",
    component: StatusAvatarDemo,
  },
  stepper: {
    title: "Stepper | Lazy UI",
    description: "Stepper Component of Lazy UI",
    component: StepperDemo,
  },
};

export default function Component() {
  const { componentname } = useParams();
  const Comp = componentsMap[componentname as keyof typeof componentsMap];

  return !Comp ? (
    <NotFound />
  ) : (
    <>
      <title>{Comp.title}</title>
      <meta name="description" content={Comp.description} />
      <Comp.component />
    </>
  );
}
