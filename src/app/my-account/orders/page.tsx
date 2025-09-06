
'use client';
import RequireAuth from "@/components/require-auth";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const orders = [
  { id: "1", date: "2024-01-15", status: "Completed", total: "$49.99" },
  { id: "2", date: "2024-02-01", status: "Completed", total: "$99.99" },
  { id: "3", date: "2024-02-20", status: "Pending", total: "$39.99" },
]

export default function OrdersPage() {
  return (
    <RequireAuth>
        <div>
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                    Your Orders
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Here is a list of your past orders.
                </p>
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
        </div>
    </RequireAuth>
  );
}
