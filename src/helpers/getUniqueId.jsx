import uuid from "react-uuid"

export default function getUniqueId() {
  let id = uuid();
  return id;
}
