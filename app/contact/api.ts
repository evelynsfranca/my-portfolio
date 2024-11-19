import { ContactEmailModel } from "@/models/ContactEmailModel";

const API_URL = process.env.API_URL;

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