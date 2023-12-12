import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/Typography";

import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CoursesPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          <CardContent className="mt-4">
            <Table>
              <TableHeader>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
