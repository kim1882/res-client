import "./App.css";
import {
  Text,
  Container,
  Heading,
  Box,
  Spinner,
  VStack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_NOTIFICATIONS } from "./services/notifications";
import { INotification } from "./types";
import Notification from "./components/Notification";

function App() {
  const { data, loading, error } = useQuery(GET_NOTIFICATIONS, {
    fetchPolicy: "network-only",
  });

  return error ? (
    <Text>{`An error has ocurred: ${error}`}</Text>
  ) : (
    <Container p={4} maxWidth={"100%"} bg="white">
      <Heading pb={"20px"}>Notifications</Heading>
      <Divider borderColor={"gray.800"} />
      <Box px="40px">
        {loading ? (
          <Spinner />
        ) : (
          <VStack
            pt={4}
            divider={<StackDivider borderColor="gray" />}
            spacing={4}
            align="stretch"
            height={"80vh"}
            overflow="auto"
          >
            {data?.getNotifications.map((item: INotification) => (
              <Notification key={item.id} item={item} />
            ))}
          </VStack>
        )}
      </Box>
    </Container>
  );
}

export default App;
