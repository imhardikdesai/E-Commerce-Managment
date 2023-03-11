import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import IsHaveAccount from "../../functions/IsHaveAccount";
import { useDispatch } from "react-redux";
import { authSetStatus } from "../../redux/actions/authActions";
import { useEffect } from "react";

export default function LoginPage() {
  const notify = () => toast.error("Invalid Credentials");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem('isLogin'))
    if (login) {
      navigate('/products')
    } else {
      navigate('/login')
    }
    
  }, [navigate])

  const initialValues = {
    email: "temp@mail.com",
    password: "hardik@00110",
  };
  const onSubmit = (values) => {
    if (IsHaveAccount(values)) {
      localStorage.setItem("isLogin", true);
      dispatch(authSetStatus(true));
      navigate("/products");
    } else {
      notify();
    }
  };

 
  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "This field is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email";
    }
    if (!values.password) {
      errors.password = "This field is required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <Toaster />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to view all of our cool products 🛒
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Form onSubmit={formik.handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"center"}
                    color="blue.500"
                  >
                    {/* <Checkbox>Remember me</Checkbox> */}
                    <RouteLink to={"/signup"}>Create New Account</RouteLink>
                  </Stack>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
