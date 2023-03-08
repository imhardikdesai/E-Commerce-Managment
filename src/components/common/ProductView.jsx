import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Badge,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdOutlineDiscount, MdOutlineInventory2, MdOutlineCategory, MdStarOutline } from "react-icons/md";
import { TbBrand4Chan } from 'react-icons/tb'

import { useParams } from "react-router-dom";
import DummyData from "../../constant/DummyData";
import SliderImage from "./SliderImage";
const ProductView = () => {
  const { productId } = useParams();
  const thisProduct = DummyData.products.find(
    (prod) => prod.id.toString() === productId
  );
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images
  } = thisProduct;
  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <SliderImage images={images} />
            {/* <Image
              rounded={"md"}
              alt={"product image"}
              src={thumbnail}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            /> */}
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${price}.00 USD
              </Text>
              <Badge variant='subtle' colorScheme='green'>{category}</Badge>

            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {description}
                </Text>
              </VStack>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <div className="d-flex align-items-center">
                      <Text className="me-2" as={"span"} fontWeight={"bold"}>
                        Brand:
                      </Text>{" "}
                      {brand} <TbBrand4Chan className="ms-2" />
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className="d-flex align-items-center">
                      <Text className="me-2" as={"span"} fontWeight={"bold"}>
                        Rating:
                      </Text>{" "}
                      {rating} <MdStarOutline className="ms-2" />
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className="d-flex align-items-center">
                      <Text className="me-2" as={"span"} fontWeight={"bold"}>
                        Discount:
                      </Text>{" "}
                      {discountPercentage}% <MdOutlineDiscount className="ms-2" />
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className="d-flex align-items-center">
                      <Text className="me-2" as={"span"} fontWeight={"bold"}>
                        Available Stock:
                      </Text>{" "}
                      {stock} <MdOutlineInventory2 className="ms-2" />
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className="d-flex align-items-center">
                      <Text className="me-2" as={"span"} fontWeight={"bold"}>
                        Category:
                      </Text>{" "}
                      {category.toUpperCase()} <MdOutlineCategory className="ms-2" />
                    </div>
                  </ListItem>
                </List>
              </Box>
            </Stack>


          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProductView;
