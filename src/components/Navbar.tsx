import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import { ColorSwitchMode } from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="8px">
      <Image src={Logo} boxSize="60px" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default Navbar;
