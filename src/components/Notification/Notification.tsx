import { Box } from "@chakra-ui/react";
import { INotification } from "../../types";
import { formatDate } from "../../utils";

interface INotificationProps {
  item: INotification;
}

const Notification = ({ item }: INotificationProps) => {
  const { id, title, content, userId, creationDate } = item;
  const date = formatDate(new Date(parseInt(creationDate, 10)).toString());

  return (
    // Working on the styles! :)
    <Box>
      <div>{title}</div>
      <div>{content}</div>
      <div>{date}</div>
    </Box>
  );
};

export default Notification;
