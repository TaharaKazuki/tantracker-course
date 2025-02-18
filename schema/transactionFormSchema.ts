import * as z from 'zod';

export const transactionFormSchema = z.object({
  transactionType: z.enum(['income', 'expense']),
  categoryId: z.coerce.number().positive('Please select a category'),
  transactionDate: z
    .date()
    .max(new Date(), 'Transaction date cannot be in the future'),
  amount: z.coerce.number().positive('Amount must be greater than 0'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(300, 'Description must contain maximum of 300 characters'),
});

export type TransactionSchemaType = z.infer<typeof transactionFormSchema>;
