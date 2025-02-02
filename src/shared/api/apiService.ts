import { getUserName } from "../utils/getUserName";
import {
  Contact,
  ContactInfo,
  Credentials,
  Message,
  Notification,
  SendMessageParams,
} from "./types";

export class ApiService {
  private idInstance;
  private apiTokenInstance;
  constructor({ idInstance, apiTokenInstance }: Credentials) {
    this.idInstance = idInstance;
    this.apiTokenInstance = apiTokenInstance;
  }

  #getUrl(path: string) {
    const id = this.idInstance.slice(0, 4);
    return `https://${id}.api.greenapi.com/waInstance${this.idInstance}/${path}/${this.apiTokenInstance}`;
  }

  async getContacts(): Promise<Contact[]> {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(this.#getUrl("getContacts"), requestOptions);
    if (resp.ok) {
      return await resp.json();
    }
    return [];
  }

  async getContactInfo(id: string): Promise<ContactInfo | null> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      chatId: id,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const resp = await fetch(this.#getUrl("GetContactInfo"), requestOptions);

    if (resp.ok) {
      return await resp.json();
    }
    return null;
  }

  async getChatHistory(chatId: string): Promise<Message[]> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      chatId: chatId,
      count: 100,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const resp = await fetch(this.#getUrl("getChatHistory"), requestOptions);
    if (resp.ok) {
      return await resp.json();
    }
    return [];
  }

  async getNotified(
    setNotification: (notification: Notification | null) => void
  ) {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(
      this.#getUrl("receiveNotification") + "?receiveTimeout=5",
      requestOptions
    );

    if (resp.ok) {
      const data = await resp.json();
      if (data) {
        await this.deleteNotified(data.receiptId);
        if (data.body.typeWebhook === "incomingMessageReceived") {
          setNotification({
            textMessage:
              data.body.messageData?.textMessageData?.textMessage ||
              data.body.messageData.extendedTextMessageData.text,
            name:
              getUserName({
                name: data.body.senderData.senderName,
                contactName: data.body.senderData.senderContactName,
                id: data.body.senderData.chatId,
              }) ?? "",
            id: data.body.senderData.chatId,
          });
        }
      } else {
        setNotification(null);
      }
      await this.getNotified(setNotification);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await this.getNotified(setNotification);
  }

  async deleteNotified(receiptId: number) {
    const requestOptions: RequestInit = {
      method: "DELETE",
      redirect: "follow",
    };

    const resp = await fetch(
      this.#getUrl("deleteNotification") + `/${receiptId}`,
      requestOptions
    );

    if (resp.ok) {
      return true;
    }
    return false;
  }

  async sendTextMessage({ chatId, message }: SendMessageParams) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      chatId,
      message,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const resp = await fetch(this.#getUrl("sendMessage"), requestOptions);

    if (resp.ok) {
      return await resp.json();
    }
    return null;
  }

  async getAccountInfo(): Promise<{ stateInstance: string } | null> {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(this.#getUrl("getWaSettings"), requestOptions);

    if (resp.ok) {
      return await resp.json();
    }
    return null;
  }
}
