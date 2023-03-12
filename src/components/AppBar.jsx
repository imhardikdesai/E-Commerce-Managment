import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Center,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.png";
import { NavLink as RouteLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { toast } from "react-hot-toast";

const LinksText = ["Home"];

const NavLink = ({ children }) => {
  let routePath = "";
  if (children === "Home") {
    routePath = "/products";
  } else {
    routePath = children.toLowerCase();
  }
  return (
    <RouteLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      to={routePath}
    >
      {children}
    </RouteLink>
  );
};

export default function AppBar({ status }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleColorMode = () => {
    toggleColorMode()
    if (localStorage.getItem('chakra-ui-color-mode') === 'light') {
      toast('Light mode activated',
        {
          icon: '🌞',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration: 1000,
        }
      );
    } else {
      toast('Dark mode activated',
        {
          icon: '🌚',
          style: {
            borderRadius: '10px',
            background: '#fff',
            color: '#333',
          },
          duration: 1000,
        }
      );
    }
  }
  const handleLogOut = () => {
    localStorage.setItem("isLogin", false)
    localStorage.removeItem('authToken')
    toast.success('Successfully logged out')
  }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <RouteLink to="/products">
              <Box>
                <img id="logo" src={logo} alt="logo" />
              </Box>
            </RouteLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {LinksText.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <div className="mx-2">
              <Button onClick={handleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </div>
            {
              status &&
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={user} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={user} />
                  </Center>
                  <br />
                  <Center>
                    <p>Hardik Desai</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <RouteLink to="profile">
                    <MenuItem>Your Profile</MenuItem>
                  </RouteLink>
                  <RouteLink to="reset">
                    <MenuItem>Change Password</MenuItem>
                  </RouteLink>
                  <RouteLink
                    onClick={handleLogOut}
                    to="/login"
                  >
                    <MenuItem>Logout</MenuItem>
                  </RouteLink>
                </MenuList>
              </Menu>
            }
          </Flex>
        </Flex>

        {/* Responsive Part */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LinksText.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
