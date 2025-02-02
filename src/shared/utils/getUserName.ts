export const getUserName = ({
  name,
  contactName,
  id,
}: {
  name?: string;
  contactName?: string;
  id?: string;
}) => {
  const currName = name ? name : contactName;
  return currName ? currName : id?.replace("@c.us", "");
};
