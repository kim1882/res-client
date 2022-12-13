export enum NotificationType {
  payIn = "payin",
  payOut = "payout",
}

export interface INotification {
  id: string;
  type: NotificationType;
  title: string;
  content: string;
  userId: string;
  creationDate: string;
}
