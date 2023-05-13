import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function SecondHalf() {
  const Array = [
    {
      id: 1,
      title: "Easy apply",
      image: "https://cdn-icons-png.flaticon.com/512/1216/1216995.png",
      des: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      id: 2,
      title: "Simpla application",
      image:
        "https://d29fhpw069ctt2.cloudfront.net/icon/image/84636/preview.svg",
      des: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      id: 3,
      title: "Get a Quick Answer",
      image: "https://cdn-icons-png.flaticon.com/512/1110/1110206.png",
      des: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
  ];
  return (
    <Box>
      <Box w="50%" m="auto" p="30px" textAlign="center" lineHeight="50px">
        <Text as="h3" fontSize="40px" fontFamily="heading" fontWeight="bold">
          We are here to help you for for every of your needs
        </Text>
        <Text as="h5" fontSize="36px" fontFamily="mono" color="blue">
          Three Quick steps to get loans
        </Text>
      </Box>

      <Box ml="10%" w="83%">
        <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="20px">
          {Array.map((elem) => (
            <Box key={elem.id} w="100%" p="17px">
              <Image
                ml="20px"
                src={elem.image}
                h="100px"
                w="100px"
                // border="1px solid red"
              />
              <Text as="h4" fontSize="25px" fontWeight="800">
                {elem.title}
              </Text>
              <Text fontSize="15px" mt="16px">
                {elem.des}
              </Text>
              <Text color="blue" mt="20px" cursor="pointer">
                {elem.link}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Box w="50%" m="auto" p="30px" textAlign="center" lineHeight="50px">
          <Text as="h5" fontSize="36px" fontFamily="heading">
            Testimonals
          </Text>
          <Text
            as="h5"
            fontSize="36px"
            fontFamily="heading"
            color="blue"
            fontWeight="bold"
          >
            What user say
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
