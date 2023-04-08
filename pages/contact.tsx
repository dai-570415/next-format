import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '../components/Layout/Layout';
import { useMail } from '../hooks/useMail';
import Styles from './css/contact.module.css';
import { validation } from '../utils/validation';

const Contact: React.FC = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(validation),
    });
    const { setName, setEmail, setMessage, send, pending } = useMail();

    return (
        <Layout>
            <main className="contact">
                <section className={ Styles.contact }>
                    <form className={Styles.form} onSubmit={handleSubmit(send)}>
                        <dl>
                            <dt>お名前</dt>
                            <dd>
                                <input type="text" {...register('name')} className={Styles.input} onChange={(e) => setName(e.target.value)} placeholder="例 山田太郎" />
                                <span className={Styles.error}>{ errors.name?.message as React.ReactNode }</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>メールアドレス</dt>
                            <dd>
                                <input type="text" {...register('email')} className={Styles.input} onChange={(e) => setEmail(e.target.value)} placeholder="例 mail@sample.jp" />
                                <span className={Styles.error}>{ errors.email?.message as React.ReactNode }</span>
                            </dd>
                        </dl>
                        <dl className={ Styles.lastForm }>
                            <dt>問い合わせ内容</dt>
                            <dd>
                                <textarea className={Styles.input} {...register('message')} onChange={(e) => setMessage(e.target.value)} placeholder="お問い合わせ内容をご入力ください。" />
                                <span className={Styles.error}>{ errors.message?.message as React.ReactNode }</span>
                            </dd>
                        </dl>
                        {pending && <p className={ Styles.pending }>メール送信中...</p>}
                        <button type="submit" className={ Styles.submit }><span>内容を送信</span></button>
                    </form>
                </section>
            </main>
        </Layout>
    );
}

export default Contact;