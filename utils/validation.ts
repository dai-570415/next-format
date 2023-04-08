import { z } from 'zod';

export const validation = z.object({
    name: z
        .string()
        .nonempty('お名前は必須項目です'),
    email: z
        .string()
        .nonempty('メールアドレスは必須項目です')
        .email('正しいメール形式で入力してください'),
    message: z
        .string()
        .nonempty('お問い合わせは必須項目です'),
});