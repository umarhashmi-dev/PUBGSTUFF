
'use client';
import RequireAuth from "@/components/require-auth";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

const downloads = [
  { id: "1", name: "Glacier M416 Skin", expires: "Never", link: "#" },
  { id: "2", name: "Golden Pharaoh X-Suit", expires: "Never", link: "#" },
]

export default function DownloadsPage() {
  return (
    <RequireAuth>
        <div>
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                    Your Downloads
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Access your purchased digital products here.
                </p>
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {downloads.map((download) => (
                    <TableRow key={download.id}>
                      <TableCell className="font-medium">{download.name}</TableCell>
                      <TableCell>{download.expires}</TableCell>
                      <TableCell className="text-right">
                         <Button asChild size="sm" className="hover-shimmer-button">
                          <a href={download.link}><Download className="mr-2" /> Download</a>
                         </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
        </div>
    </RequireAuth>
  );
}
