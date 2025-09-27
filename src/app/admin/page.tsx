
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, LoaderCircle } from 'lucide-react';
import { getAwarenessRequests, updateAwarenessRequestStatus, type AwarenessRequest } from '@/lib/firebase-service';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

type Status = 'Pending' | 'Reviewed' | 'Completed';

export default function AdminPage() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const [requests, setRequests] = useState<AwarenessRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!loading) {
      if (!user || !isAdmin) {
        toast({
          title: 'Access Denied',
          description: 'You do not have permission to view this page.',
          variant: 'destructive',
        });
        router.push('/');
      } else {
        fetchRequests();
      }
    }
  }, [user, loading, isAdmin, router, toast]);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const fetchedRequests = await getAwarenessRequests();
      setRequests(fetchedRequests);
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch awareness drive requests.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: Status) => {
    try {
      await updateAwarenessRequestStatus(id, status);
      setRequests((prevRequests) =>
        prevRequests.map((req) => (req.id === id ? { ...req, status } : req))
      );
      toast({
        title: 'Status Updated',
        description: `Request status changed to ${status}.`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Update Failed',
        description: 'Could not update the request status.',
        variant: 'destructive',
      });
    }
  };

  const getStatusVariant = (status: Status) => {
    switch (status) {
      case 'Pending':
        return 'secondary';
      case 'Reviewed':
        return 'default';
      case 'Completed':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  if (loading || isLoading || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Admin Dashboard</CardTitle>
          <CardDescription>Manage and review awareness drive requests from the community.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institution</TableHead>
                <TableHead className="hidden md:table-cell">Contact Person</TableHead>
                <TableHead className="hidden lg:table-cell">Contact Info</TableHead>
                <TableHead>Preferred Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No requests found.
                  </TableCell>
                </TableRow>
              ) : (
                requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div className="font-medium">{request.institutionName}</div>
                      <div className="text-sm text-muted-foreground">{request.institutionType}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{request.contactPerson}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                        <div>{request.email}</div>
                        <div className="text-sm text-muted-foreground">{request.phoneNumber}</div>
                    </TableCell>
                    <TableCell>{format(request.preferredDate, 'PPP')}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(request.status)}>{request.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Pending')}>
                            Set as Pending
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Reviewed')}>
                            Set as Reviewed
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Completed')}>
                            Set as Completed
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
