import { createTransport } from 'nodemailer';

export default async (req, res) => {
    const transporter = createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: '', // 使用するGoogleアカウントを指定
            pass: '', // Googleアカウントで設定
        },
    });
    await transporter.sendMail({
        from: '',
        to: '',
        subject: 'お問い合わせ',
        text: req.body,
    });

    res.status(200).json({
        success: true,
    });
};