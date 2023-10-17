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
  FormErrorMessage,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import IsHaveAccount from "../../functions/IsHaveAccount";
import { useEffect } from "react";
import { loginSchema } from "../../validation/authValidation";
import GetDecryptText from "../../functions/GetDecryptText";
import GetEncryptText from "../../functions/GetEncryptText";
import { messages } from "../../constant/messages";

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("isLogin"));
    let isHaveValidToken = false;
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      let encToken = GetDecryptText(localStorage.getItem("authToken"));

      const authEmail = encToken.split(",")[0];
      const authPassword = encToken.split(",")[1];
      isHaveValidToken = JSON.parse(localStorage.getItem("loginData")).some(
        (item) => {
          let temp = GetDecryptText(item);
          let isTemp = false;
          if (temp.email === authEmail && temp.password === authPassword) {
            isTemp = true;
          }
          return isTemp;
        }
      );
    }

    if (login && isHaveValidToken) {
      navigate("/products");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const initialValues = {
    email: "",
    password: "",
  };
  // const initialValues = {
  //   email: "demo@mail.com",
  //   password: "Demo@123",
  // };
  const onSubmit = (values) => {
    const authToken = GetEncryptText(values.email + "," + values.password);
    if (IsHaveAccount(values)) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("authToken", authToken);
      navigate("/products");
      toast.success(messages.loginWelcome, {
        duration: 3000,
        style: {
          textAlign: "center",
        },
      });
    } else {
      toast.error(messages.invalidCredentials);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  });
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log in to your account</Heading>
            <Text
              _dark={{ color: "gray.300" }}
              fontSize={"lg"}
              color={"gray.600"}
            >
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
                <FormControl
                  id="email"
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                  />
                  {formik.touched.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  id="password"
                  isInvalid={formik.errors.password && formik.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                  />
                  {formik.touched.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
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
