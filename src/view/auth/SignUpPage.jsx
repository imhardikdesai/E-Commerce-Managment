import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authSetData } from "../../redux/actions/authActions";
import CheckUserAuth from "../../functions/CheckUserAuth";
import SetLocalData from "../../functions/SetLocalData";
import GetEncryptText from "../../functions/GetEncryptText";
import { useEffect } from "react";
import { signupSchema } from "../../validation/authValidation";
import { messages } from "../../constant/messages";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("isLogin"));
    if (login) {
      navigate("/products");
    } else {
      navigate("/signup");
    }
    // eslint-disable-next-line
  }, [navigate]);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    cPassword: "",
  };
  // const initialValues = {
  //   firstName: "Hardik",
  //   lastName: "Desai",
  //   email: "demo@mail.com",
  //   mobile: "7878787878",
  //   password: "Demo@123",
  //   cPassword: "Demo@123",
  // };
  const onSubmit = (values) => {
    const encData = GetEncryptText(values);
    const authToken = GetEncryptText(values.email + "," + values.password);
    dispatch(authSetData(values));

    if (localStorage.getItem("loginData") === null) {
      SetLocalData(encData, true, authToken);
      navigate("/products");
      toast.success(messages.accountCreationSucess, {
        duration: 3000,
      });
    } else if (CheckUserAuth(values)) {
      toast.error(messages.userAlerdyExists);
    } else {
      SetLocalData(encData, true, authToken);
      navigate("/products");
      toast.success(messages.accountCreationSucess, {
        duration: 3000,
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: signupSchema,
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
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text
              _dark={{ color: "gray.300" }}
              fontSize={"lg"}
              color={"gray.600"}
            >
              to view all of our cool products ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Form onSubmit={formik.handleSubmit}>
                <HStack>
                  <Box>
                    <FormControl
                      id="firstName"
                      isInvalid={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    >
                      <FormLabel>First Name</FormLabel>
                      <Input
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                      />
                      {formik.touched.firstName && (
                        <FormErrorMessage>
                          {formik.errors.firstName}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl
                  id="email"
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                  />
                  {formik.touched.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  id="mobile"
                  isInvalid={formik.touched.mobile && formik.errors.mobile}
                >
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="tel"
                  />
                  {formik.touched.mobile && (
                    <FormErrorMessage>{formik.errors.mobile}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  id="password"
                  isInvalid={formik.touched.password && formik.errors.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                  />
                  {formik.touched.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  id="cPassword"
                  isInvalid={
                    formik.touched.cPassword && formik.errors.cPassword
                  }
                >
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    value={formik.values.cPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                  />
                  {formik.touched.cPassword && (
                    <FormErrorMessage>
                      {formik.errors.cPassword}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>

                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?
                    <RouteLink to="/login">Login</RouteLink>
                  </Text>
                </Stack>
              </Form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
