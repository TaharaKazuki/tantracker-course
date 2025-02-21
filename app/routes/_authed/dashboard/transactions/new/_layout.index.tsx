import { createFileRoute } from '@tanstack/react-router';

import { TransactionForm } from '@/components/transaction-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategories } from '@/data/getCategories';

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/new/_layout/'
)({
  component: RouteComponent,
  loader: async () => {
    const categories = await getCategories();
    return { categories };
  },
});

function RouteComponent() {
  const { categories } = Route.useLoaderData();

  return (
    <Card className="mt-4 max-w-screen-md">
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionForm categories={categories} />
      </CardContent>
    </Card>
  );
}
