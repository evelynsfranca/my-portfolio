import { ContactEmailModel } from '@/models/ContactEmailModel';

export const EmailTemplate: React.FC<ContactEmailModel> = (props: ContactEmailModel) => {

    const { from, subject, content } = props;

    return (
        <article style={{ padding: '2rem 1rem' }}>

            <header style={{ borderBottom: '3px solid black' }}>
                <h1>Novo contato - Via Portfólio</h1>
            </header>

            <p
                style={{
                    borderBottom: '3px solid black',
                    padding: '2rem 0'
                }}
            >
                <span style={{ fontWeight: 'bold' }}>De:</span>
                <br /><br />
                <span>{from}</span>
            </p>

            <p
                style={{
                    borderBottom: '3px solid black',
                    padding: '2rem 0'
                }}
            >
                <span style={{ fontWeight: 'bold' }}>Assunto:</span>
                <br /><br />
                <span>{subject}</span>
            </p>

            <p
                style={{
                    borderBottom: '3px solid black',
                    padding: '2rem 0'
                }}
            >
                <span style={{ fontWeight: 'bold' }}>Conteúdo:</span>
                <br /><br />
                <span>{content}</span>
            </p>

        </article>
    )
};


export default EmailTemplate;