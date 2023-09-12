import { IconType } from "react-icons";
import { BsDropletFill, BsFillGearFill } from "react-icons/bs";

type IconOptions = "Drop" | "Settings"; // Define your valid icon options here

const icons: Record<IconOptions, IconType> = {
  Drop: BsDropletFill,
  Settings: BsFillGearFill,
  // Add other icon components here
};

type IconProps = {
  icon: IconOptions; // Use IconOptions as the type for the icon prop
};

const Icon = ({ icon }: IconProps) => {
  const IconComponent = icons[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};

export default Icon;
