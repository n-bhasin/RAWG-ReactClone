import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import { ColorSwitchMode } from "./ColorSwitchMode";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="8px">
      <Image src={Logo} boxSize="60px" />
      <ColorSwitchMode />
    </HStack>
  );
};

export default Navbar;
