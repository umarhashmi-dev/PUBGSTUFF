import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

const downloads = [
  { id: "1", name: "Glacier M416 Skin", expires: "Never", link: "#" },
  { id: "2", name: "Golden Pharaoh X-Suit", expires: "Never", link: "#" },
]

export default function DownloadsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Your Downloads</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Access your purchased digital products here.
            </p>
          </div>
          <div className="mt-16">
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
                       <Button asChild size="sm">
                        <a href={download.link}><Download className="mr-2" /> Download</a>
                       </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
