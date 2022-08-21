import { Stack, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Popover, PopupButton } from "@typeform/embed-react";
import { Shell } from "../components/shell";

export default function RSVP() {
  return (
    <Shell textColor="rgb(122, 61, 124)">
      <Stack width="100%" maxW="48rem" px={2} pb={32}>
        <Heading as="h2" fontFamily={"Jeanne Moderno"} py={4}>
          Received an invitation? Confirm below.
        </Heading>
        <Text>
          We will be outside for both the ceremony and after party so we are not
          requiring people to wear masks.
        </Text>

        <Text>- Please respect everyone else;</Text>
        <Text>
          - No need to bring anything.
        </Text>

        <PopupButton id="U19zGvXO">
          <Flex py={8}>
            <Button
              as="span"
              // background={"rgb(122, 61, 124)"}
              // _hover={{ background: "rgb(122, 61, 124)" }}
              // textColor={"#fff"}
              background={"rgb(195, 132, 197)"}
              _hover={{ background: "rgb(195, 132, 197)" }}
              textColor="rgb(50, 24, 50)"
              size={"sm"}
              width={"100%"}
            >
              RSVP here
            </Button>
          </Flex>
        </PopupButton>
      </Stack>
    </Shell>
  );
}
