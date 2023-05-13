import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Boxes() {
  const Array = [
    {
      id: 1,
      title: "Short-term load",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "🤝",
    },
    {
      id: 2,
      title: "Personal loan",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "🔃",
    },
    {
      id: 3,
      title: "Credit card",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "💳",
    },
    {
      id: 4,
      title: "Credit line",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
    },
    {
      id: 5,
      title: "Over-draft",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "💸",
    },
    {
      id: 6,
      title: "payLater",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "⏱️",
    },
    {
      id: 7,
      title: "Vehicle loan",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "🚗",
    },
    {
      id: 8,
      title: "Balance Transfer",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "📃",
    },
    {
      id: 9,
      title: "Check your loan",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum blandit lectus ut gravida.",
      link: "Check Eligibility",
      image: "📑",
    },
  ];
  return (
    <>
      <Box ml="10%" w="80%" mt="30px">
        <Text fontSize="25px" fontFamily="heading" fontWeight="400">
          Credit product
        </Text>
        <Box border="1px solid black" w="25%"></Box>
        <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="20px">
          {Array.map((elem) => (
            <Box
              key={elem.id}
              border="1px solid blue"
              // h="200px"
              // w="100%"
              p="17px"
              boxShadow={
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              }
            >
              <Box display="flex" justifyContent="space-between">
                <Text as="h4" fontSize="25px" fontWeight="800">
                  {elem.title}
                </Text>
                <Box w="20%" lineHeight="10px" p="20px">
                  <Text fontSize="40px">{elem.image}</Text>
                </Box>
              </Box>
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
      <Box mt="60px" border="1px solid black" opacity="20%"></Box>
    </>
  );
}
