import { Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { Shell } from "../components/shell";

export default function Who() {
  return (
    <Shell textColor="#156fce" backgroundColor="#fff">
      <Flex direction={"column"} textAlign={"center"} px={4} pb={32}>
        <Heading
          as="h1"
          fontSize={"sm"}
          fontWeight="normal"
          textTransform={"uppercase"}
          py={4}
        >
          Celebrating the union of
        </Heading>
        <Heading as="h2" fontFamily={"Jeanne Moderno"} py={4}>
          Molli Brooke Campbell
        </Heading>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mr. Bruce Donald Campbell
        </Text>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mrs. Paula Renert Campbell
        </Text>

        <Heading as="h3" fontFamily={"Jeanne Moderno"} py={8}>
          &
        </Heading>

        <Heading fontFamily={"Jeanne Moderno"} py={4}>
          Phillip Phillip
        </Heading>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mr. Phillip Dad
        </Text>
        <Text fontSize={"sm"} fontWeight="normal" textTransform={"uppercase"}>
          Mrs. Phillip Mom
        </Text>
      </Flex>
    </Shell>
  );
}
