
'use client';

import { useEffect, useState, useMemo } from 'react';
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
import { MoreHorizontal, LoaderCircle, CheckCircle, FileText, Hourglass } from 'lucide-react';
import { getAwarenessRequests, updateAwarenessRequestStatus, type AwarenessRequest } from '@/lib/firebase-service';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { type ChartConfig } from "@/components/ui/chart";

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

  const { statusCounts, chartData } = useMemo(() => {
    const statusCounts = {
      Pending: 0,
      Reviewed: 0,
      Completed: 0,
      Total: requests.length,
    };
    const institutionTypeCounts: Record<string, number> = {
      School: 0,
      College: 0,
      Panchayat: 0,
      Other: 0,
    };

    requests.forEach(req => {
      statusCounts[req.status]++;
      institutionTypeCounts[req.institutionType]++;
    });

    const chartData = Object.entries(institutionTypeCounts).map(([name, total]) => ({ name, total }));

    return { statusCounts, chartData };
  }, [requests]);

  const getStatusVariant = (status: Status) => {
    switch (status) {
      case 'Pending': return 'secondary';
      case 'Reviewed': return 'default';
      case 'Completed': return 'outline';
      default: return 'secondary';
    }
  };
  
  const chartConfig = {
    total: {
      label: "Requests",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  if (loading || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage and review awareness drive requests from the community.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.Total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Hourglass className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.Pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reviewed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.Reviewed}</div>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.Completed}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Requests by Institution Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'hsl(var(--muted))'}} contentStyle={{backgroundColor: 'hsl(var(--background))'}}/>
                <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Requests</CardTitle>
            <CardDescription>A list of the most recent awareness drive requests.</CardDescription>
          </CardHeader>
          <CardContent>
             {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Institution</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.slice(0, 5).map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div className="font-medium">{request.institutionName}</div>
                      <div className="text-sm text-muted-foreground">{request.contactPerson}</div>
                    </TableCell>
                    <TableCell>{format(request.preferredDate, 'PPP')}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(request.status)}>{request.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" /><span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                           <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Pending')}>Set as Pending</DropdownMenuItem>
                           <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Reviewed')}>Set as Reviewed</DropdownMenuItem>
                           <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Completed')}>Set as Completed</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            )}
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>All Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institution</TableHead>
                <TableHead className="hidden md:table-cell">Contact Info</TableHead>
                <TableHead>Preferred Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.length === 0 ? (
                <TableRow><TableCell colSpan={5} className="h-24 text-center">No requests found.</TableCell></TableRow>
              ) : (
                requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div className="font-medium">{request.institutionName}</div>
                      <div className="text-sm text-muted-foreground">{request.contactPerson}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
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
                            <MoreHorizontal className="h-4 w-4" /><span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                           <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Pending')}>Set as Pending</DropdownMenuItem>
                           <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Reviewed')}>Set as Reviewed</DropdownMenuItem>
                           <DropdownMenuItem onClick={() => handleStatusChange(request.id, 'Completed')}>Set as Completed</DropdownMenuItem>
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
