import { ContactEmailModel } from "@/models/ContactEmailModel";

export const emailValidation = (email: ContactEmailModel | undefined, onValidate: (message: string | undefined) => void) => {
    if (!email) {
        onValidate("Informe os dados para contato.");
        return false;
    } else if (!email.name || email.name == '') {
        onValidate("Informe seu nome.");
        return false;
    } else if (!email.from || email.from == '') {
        onValidate("Informe seu contato.");
        return false;
    } else if (!email.subject || email.subject == '') {
        onValidate("Informe o assunto.");
        return false;
    } else if (!email.content || email.content == '') {
        onValidate("Informe o conteúdo da mensagem.");
        return false;
    } else {
        onValidate(undefined);
        return true;
    }
}