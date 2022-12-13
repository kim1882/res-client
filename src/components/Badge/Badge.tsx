import { NotificationType } from "../../types";
import { Check, DollarSign } from "@emotion-icons/feather";
import { Icon } from "@chakra-ui/react";

interface IBadgeProps {
  type: NotificationType;
}

const Badge = ({ type }: IBadgeProps) => {
  return (
    <Icon
      m={4}
      as={type === NotificationType.payIn ? DollarSign : Check}
      strokeWidth="2px"
      color="gray"
      w={6}
      h={6}
    />
  );
};

export default Badge;
