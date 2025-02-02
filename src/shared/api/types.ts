export type Contact = {
  id: string;
  name: string;
  contactName: string;
};

export type ContactInfo = {
  avatar: string;
  name: string;
  contactName: string;
  email: string;
  chatId: string;
};

export type Message = {
  type: MessageType;
  textMessage: string;
};

export type MessageType = "incoming" | "outgoing";

export type Notification = {
  name: string;
  id: string;
  textMessage: string;
};

export type IncomingNotification = {
  receiptId: number;
  body: {
    typeWebhook: string;
    idMessage: string;
    senderData: {
      chatId: string;
      senderName: string;
      senderContactName: string;
    };
    messageData: {
      extendedTextMessageData: {
        text: string;
      };
      textMessageData: {
        textMessage: string;
      };
    };
  };
};

export type SendMessageParams = {
  chatId: string;
  message: string;
};

export type Credentials = {
  idInstance: string;
  apiTokenInstance: string;
};
