import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import GetProfileData from "../../functions/GetProfileData";
import { Form } from "react-bootstrap";
import SetProfileData from "../../functions/SetProfileData";
import { updateProfile } from "../../validation/userValidation";
import { messages } from "../../constant/messages";

export default function ProfileDetails() {
  const [currentUser] = useState(GetProfileData());

  let initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    mobile: currentUser.mobile,
    password: currentUser.password,
    cPassword: currentUser.cPassword,
  };
  const handleUpdateProfile = (values) => {
    if (SetProfileData(values)) {
      toast.error(messages.emailExists);
    } else {
      toast.success(messages.profileUpdate);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleUpdateProfile,
    validationSchema: updateProfile,
  });

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
        <Form onSubmit={formik.handleSubmit}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>

          <FormControl
            id="firstName"
            isInvalid={formik.errors.firstName && formik.touched.firstName}
          >
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && (
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="lastName">
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl
            id="email"
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            id="mobile"
            isInvalid={formik.errors.mobile && formik.touched.mobile}
          >
            <FormLabel>Mo no</FormLabel>
            <Input
              placeholder="+91 983** ****5"
              _placeholder={{ color: "gray.500" }}
              type="tel"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && (
              <FormErrorMessage>{formik.errors.mobile}</FormErrorMessage>
            )}
          </FormControl>

          <Stack mt="2" spacing={6} direction={["column", "row"]}>
            <Button
              type="submit"
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
        </Form>
      </Stack>
    </Flex>
  );
}
