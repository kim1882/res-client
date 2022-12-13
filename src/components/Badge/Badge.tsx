import { NotificationType } from "../../types";
import { Info, Check, DollarSign } from "@emotion-icons/feather";
import { Icon } from "@chakra-ui/react";

interface IBadgeProps {
  type: NotificationType;
}

const Badge = ({ type }: IBadgeProps) => {
  const styles = () => {
    let badgeStyle = { icon: Info, color: "gray" };
    switch (type) {
      case NotificationType.payIn:
        badgeStyle = { icon: DollarSign, color: "green" };
        break;
      case NotificationType.payOut:
        badgeStyle = { icon: Check, color: "blue" };
        break;
    }
    return badgeStyle;
  };

  const { icon, color } = styles();

  return <Icon m={4} as={icon} strokeWidth="2px" color={color} w={6} h={6} />;
};

export default Badge;
