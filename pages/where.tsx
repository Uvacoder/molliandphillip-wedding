import {
  Stack,
  Heading,
  Text,
  Button,
  useDisclosure,
  Spinner,
  CircularProgress,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { Shell } from "../components/shell";

export default function Where() {
  const { isOpen, onOpen } = useDisclosure();
  return (
    <Shell backgroundColor="#fff" textColor="#aa3007">
      <Stack width="100%" maxW="48rem" px={2} pb={32}>
        <Flex py={2}>
          <Heading
            as="h1"
            fontSize={"sm"}
            fontWeight="normal"
            textTransform={"uppercase"}
            py={2}
          >
            Location
          </Heading>
        </Flex>
        <Heading as="h2" fontFamily={"Jeanne Moderno"}>
          Camp Albemarle
        </Heading>
        <Text>Pavilion One</Text>
        <Flex pb={4}>
          <Text opacity={0.8}>
            Free Union, Virginia
          </Text>
        </Flex>
        {!isOpen && (
          <Grid
            width={"100%"}
            maxW={"766px"}
            height={448}
            placeItems="center"
            textAlign={"center"}
            border="1px solid"
          >
            <Stack textAlign={"center"} alignItems="center">
              <Text
                fontSize={"sm"}
                fontWeight="normal"
                textTransform={"uppercase"}
              >
                Loading map...
              </Text>
              <CircularProgress isIndeterminate color="#aa3007" />
            </Stack>
          </Grid>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.038661189406!2d-78.55711099999999!3d38.13929400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b47928da4baecd%3A0x25eb155b154bc651!2sCamp%20Albemarle!5e0!3m2!1sen!2sus!4v1661057248767!5m2!1sen!2sus"
          width="600" 
          height="450" 
          style={{ border: 0 }}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"         
          onLoad={onOpen}
        ></iframe>
      </Stack>
    </Shell>
  );
}
