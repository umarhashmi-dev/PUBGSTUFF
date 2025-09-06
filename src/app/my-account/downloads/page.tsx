
'use client';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText } from "lucide-react";

const downloads = [
  { id: "1", name: "Glacier M416 Skin", expires: "Never", link: "#" },
  { id: "2", name: "Golden Pharaoh X-Suit", expires: "Never", link: "#" },
  { id: "3", name: "Vnhax Month Key", expires: "2025-08-15", link: "#" },
]

export default function DownloadsPage() {
  return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                    Your Downloads
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Access your purchased digital products here.
                </p>
            </div>
            <div className="border rounded-lg bg-gray-50/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {downloads.map((download) => (
                    <TableRow key={download.id}>
                      <TableCell className="font-medium flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        {download.name}
                      </TableCell>
                      <TableCell>{download.expires}</TableCell>
                      <TableCell className="text-right">
                         <Button asChild size="sm" className="hover-shimmer-button">
                          <a href={download.link}><Download className="mr-2 h-4 w-4" /> Download</a>
                         </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
        </div>
  );
}
