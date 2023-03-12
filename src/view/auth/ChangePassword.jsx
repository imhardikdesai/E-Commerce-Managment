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
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";

export default function ChangePassword() {
  const initialValues = {

  }
  const handleUpdatePassword = () => {
    toast.success('Password updated successfully!')
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleUpdatePassword
  })
  return (
    <>
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

          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Change password
          </Heading>
          <Form onSubmit={formik.handleSubmit}>
            <FormControl id="passwordCurrent" isRequired>
              <FormLabel>Current Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="passwordNew" isRequired>
              <FormLabel>New Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="passwordNewConfirm" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Stack spacing={6}>
              <Button
                type="submit"
                bg={"green.500"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Update Password
              </Button>
            </Stack>


          </Form>
        </Stack>
      </Flex>
    </>
  );
}
