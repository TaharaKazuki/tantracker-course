import { createFileRoute } from '@tanstack/react-router';

import { TransactionForm } from '@/components/transaction-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/new/_layout/'
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card className="mt-4 max-w-screen-md">
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionForm />
      </CardContent>
    </Card>
  );
}
