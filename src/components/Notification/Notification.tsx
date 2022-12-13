import { Flex, Box, Text } from "@chakra-ui/react";
import { INotification } from "../../types";
import { formatDate } from "../../utils";
import Badge from "../Badge";

interface INotificationProps {
  item: INotification;
}

const Notification = ({ item }: INotificationProps) => {
  const { id, type, title, content, userId, creationDate } = item;
  const date = formatDate(new Date(parseInt(creationDate, 10)).toString());

  return (
    // Working on the styles! :)
    <Flex alignItems={"center"}>
      <Badge type={type} />
      <Box>
        <Text
          fontSize={"lg"}
          fontWeight="bold"
          fontFamily={"Sans-Serif"}
          color="gray.700"
        >
          {title}
        </Text>
        <Text fontSize={"md"}>{content}</Text>
        <Text fontSize={"xs"} color="gray.500">
          {date}
        </Text>
      </Box>
    </Flex>
  );
};

export default Notification;
