import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ProfileDetails({ notify }) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>

        <FormControl id="firstName" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Last Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="moNumber" isRequired>
          <FormLabel>Mo no</FormLabel>
          <Input
            placeholder="+91 983** ****5"
            _placeholder={{ color: "gray.500" }}
            type="tel"
          />
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          {/* <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button> */}
          <Button
            onClick={() => notify()}
            bg={"green.500"}
            color={"white"}
            w="full"
            _hover={{
              bg: "green.500",
            }}
          >
            Update Changes
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
