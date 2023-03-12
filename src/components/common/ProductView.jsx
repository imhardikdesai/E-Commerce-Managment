import React, { useEffect, useState } from "react";
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
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdOutlineDiscount, MdOutlineInventory2, MdOutlineCategory, MdStarOutline } from "react-icons/md";
import { TbBrand4Chan } from 'react-icons/tb'
import { useParams } from "react-router-dom";
import SliderImage from "./SliderImage";
import axios from "axios";
import Loader from "./Loader";
const ProductView = () => {
  const { productId } = useParams();
  const [thisProduct, setThisProduct] = useState({})
  const fetchData = async () => {
    return axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setThisProduct(response.data))
      .catch(error => error.message)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const {
    title,
    description,
    price,
    discountPercentage,
    category,
    brand,
    rating,
    images,
    stock,
  } = thisProduct
  return (
    <>
      {(thisProduct.title === undefined) ? (
        <Loader />
      ) :
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <SliderImage images={images} />
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
                  color={'gray.900'}
                  _dark={{ color: 'gray.400' }}
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
                    borderColor={'gray.200'}
                    _dark={{ borderColor: 'gray.600' }}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    textAlign={'start'}
                    width={'100%'}
                    color={'gray.500'}
                    _dark={{ color: 'gray.300' }}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {description}
                  </Text>
                </VStack>

                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={'yellow.400'}
                    _dark={{ color: 'yellow.300' }}
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
      }
    </>
  );
};

export default ProductView;