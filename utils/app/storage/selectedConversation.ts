import { User } from '@/types/auth';
import { Conversation } from '@/types/chat';

export const getSelectedConversation = (user: User) => {
  const itemName = `selectedConversation-${user.email}`;
  return localStorage.getItem(itemName);
};

export const saveSelectedConversation = (
  user: User,
  conversation: Conversation,
) => {
  const itemName = `selectedConversation-${user.email}`;
  localStorage.setItem(itemName, JSON.stringify(conversation));
};

export const deleteSelectedConversation = (user: User) => {
  const itemName = `selectedConversation-${user.email}`;
  localStorage.removeItem(itemName);
};
