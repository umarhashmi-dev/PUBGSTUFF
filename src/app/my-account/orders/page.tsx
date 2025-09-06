
'use client';
import RequireAuth from "@/components/require-auth";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const orders = [
  { id: "#3210", date: "2024-01-15", status: "Completed", total: "$49.99" },
  { id: "#3209", date: "2024-02-01", status: "Completed", total: "$99.99" },
  { id: "#3208", date: "2024-02-20", status: "Pending", total: "$39.99" },
  { id: "#3207", date: "2024-03-05", status: "Completed", total: "$129.50" },
  { id: "#3206", date: "2024-03-12", status: "Cancelled", total: "$25.00" },
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
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
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
                      <TableCell>
                        <Badge variant="outline" className={cn(
                            order.status === 'Completed' && 'bg-green-100 text-green-800 border-green-200',
                            order.status === 'Pending' && 'bg-yellow-100 text-yellow-800 border-yellow-200',
                            order.status === 'Cancelled' && 'bg-red-100 text-red-800 border-red-200',
                        )}>
                            {order.status}
                        </Badge>
                      </TableCell>
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
