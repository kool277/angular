export interface Contact {
  name: string;
  email: string;
}

/** Pretends to save the contact on a server. One email address is already used. */
export async function saveContact(contact: Contact): Promise<{ok: boolean}> {
  await new Promise((resolve) => setTimeout(resolve, 30));
  return {ok: contact.email !== 'taken@example.uz'};
}
