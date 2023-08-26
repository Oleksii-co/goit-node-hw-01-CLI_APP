import contactsService from "./contacts.js";

const invokeAction = async ({ action, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
      break;
    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction("list");
invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
