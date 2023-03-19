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
import { useFormik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { messages } from "../../constant/messages";
import SetUpdatedPassword from "../../functions/SetUpdatedPassword";
import { changePassword } from "../../validation/authValidation";
import GetProfileData from "./../../functions/GetProfileData";

export default function ChangePassword() {
  const [currentUser] = useState(GetProfileData());
  const initialValues = {
    passwordCurrent: "",
    passwordNew: "",
    passwordNewConfirm: "",
  };
  // const initialValues = {
  //   passwordCurrent: "Hardik@1",
  //   passwordNew: "Hardik@1",
  //   passwordNewConfirm: "Hardik@1",
  // };
  const handleUpdatePassword = (values) => {
    if (currentUser.password !== values.passwordCurrent) {
      toast.error(messages.passwordInvalid);
    } else if (currentUser.password === values.passwordNew) {
      toast.error(messages.passwordUnique);
    } else {
      SetUpdatedPassword(values, currentUser);
      toast.success(messages.passwordUpdate);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleUpdatePassword,
    validationSchema: changePassword,
  });

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
            {/* Current  */}
            <FormControl
              id="passwordCurrent"
              isInvalid={
                formik.touched.passwordCurrent && formik.errors.passwordCurrent
              }
            >
              <FormLabel>Current Password</FormLabel>
              <Input
                type="password"
                value={formik.values.passwordCurrent}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.passwordCurrent && (
                <FormErrorMessage>
                  {formik.errors.passwordCurrent}
                </FormErrorMessage>
              )}
            </FormControl>
            {/* New password */}
            <FormControl
              id="passwordNew"
              isInvalid={
                formik.touched.passwordNew && formik.errors.passwordNew
              }
            >
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                value={formik.values.passwordNew}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.passwordNew && (
                <FormErrorMessage>{formik.errors.passwordNew}</FormErrorMessage>
              )}
            </FormControl>
            {/* confirm pass  */}
            <FormControl
              id="passwordNewConfirm"
              isInvalid={
                formik.touched.passwordNewConfirm &&
                formik.errors.passwordNewConfirm
              }
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={formik.values.passwordNewConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.passwordNewConfirm && (
                <FormErrorMessage>
                  {formik.errors.passwordNewConfirm}
                </FormErrorMessage>
              )}
            </FormControl>

            <Stack mt={2} spacing={6}>
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
