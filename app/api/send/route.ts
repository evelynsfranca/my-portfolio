import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_TOKEN);
const FROM = process.env.RESEND_MAIL_FROM?.toString() || '';
const MAIL_TO = process.env.RESEND_MAIL_TO?.toString() || '';

export async function POST(req: Request, _res: Response) {

    const dt = await req?.json();

    const { data, error } = await resend.emails.send({
        from: FROM,
        to: MAIL_TO,
        subject: 'Portfólio: ' + dt?.subject,
        react: EmailTemplate(dt),
        text: dt?.content ? dt?.content : 'empty'
    });

    if (error) {
        return Response.json(error, { status: 400, statusText: error.name });
    }

    return Response.json(data, { status: 200 });

}