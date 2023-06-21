import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platforms } from "../hooks/usePlatforms";
interface Props {
  onSelectPlatform: (plaform: Platforms) => void;
  selectedPlatform: Platforms | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton marginX={5} as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platforms) => (
            <MenuItem
              onClick={() => onSelectPlatform(platforms)}
              key={platforms.id}
            >
              {platforms.slug}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
