import { ContactEmailModel } from "@/models/ContactEmailModel";
import { API_URL } from "../shared/utils/variables";

export async function handleContact(email: ContactEmailModel) {
    return await fetch(API_URL + '/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email),
    }).then(res => res)
        .catch(error => {
            console.error('Error during fetch:', error);
            return null;
        });
}