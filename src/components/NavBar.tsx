import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/react.svg";
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image boxSize={'60px'} src={logo}></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar