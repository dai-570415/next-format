import { useState } from 'react';

export const useMail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [pending, setPending] = useState(false);

    const send = async () => {
        setPending(true);
        try {
            await fetch('/api/mail', {
                method: 'POST',
                body: `
                    送信された情報
                    --------------------------------------
                    名前
                    ${name}
                    --------------------------------------
                    メールアドレス
                    ${email}
                    --------------------------------------
                    お問い合わせ内容
                    ${message}
                    --------------------------------------
                `,
            });
        } finally {
            setPending(false);
            location.reload();
        }
    };

    return {
        setName, setEmail, setMessage, send, pending
    };
};