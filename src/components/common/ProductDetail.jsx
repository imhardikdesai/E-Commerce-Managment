import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FcRating } from "react-icons/fc";
import { Col } from "react-bootstrap";
import { NavLink as RouteLink } from "react-router-dom";
const ProductDetail = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}) => {
  return (
    <>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: thumbnail,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={thumbnail}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {brand}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {title}
              </Heading>
              <Stack direction={"column"} align={"center"}>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Actress, musician, songwriter and artist. PM for work inquires
                  or me in your posts
                </Text>

                <Text fontWeight={800} fontSize={"xl"}>
                  ${price}
                </Text>
                <Text
                  display={"flex"}
                  alignItems="center"
                  fontStyle={"italic"}
                  color={"gray.600"}
                >
                  <FcRating />
                  &nbsp;{rating}
                </Text>
              </Stack>
              <Stack>
                <RouteLink to={`/products/${id}`}>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "blue.500",
                    }}
                    _focus={{
                      bg: "blue.500",
                    }}
                  >
                    See more
                  </Button>
                </RouteLink>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Col>
    </>
  );
};

export default ProductDetail;
