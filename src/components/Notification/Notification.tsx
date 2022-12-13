import { Flex, Box } from "@chakra-ui/react";
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
        <div>{title}</div>
        <div>{content}</div>
        <div>{date}</div>
      </Box>
    </Flex>
  );
};

export default Notification;
