import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

import {
  transactionFormSchema,
  TransactionSchemaType,
} from '@/schema/transactionFormSchema';

export function TransactionForm() {
  const form = useForm<TransactionSchemaType>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      transactionType: 'income',
      amount: 0,
      categoryId: 0,
      description: '',
      transactionDate: new Date(),
    },
  });

  return (
    <Form {...form}>
      <form>
        <fieldset className="grid grid-cols-2 gap-x-2 gap-y-5">
          <FormField
            control={form.control}
            name="transactionType"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Transaction Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </fieldset>
      </form>
    </Form>
  );
}
