import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { DollarSign } from 'lucide-react';

type Payment = {
  id: number;
  tenant: string;
  property: string;
  unit: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  date: string;
};

type RecentPaymentsProps = {
  payments: Payment[];
};

const RecentPayments = ({ payments }: RecentPaymentsProps) => {
  const getStatusVariant = (status: Payment['status']) => {
    switch (status) {
      case 'Paid':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Overdue':
        return 'error';
      default:
        return 'default';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div 
              key={payment.id}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary mr-4">
                <DollarSign size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{payment.tenant}</h4>
                <p className="text-xs text-gray-500 truncate">
                  {payment.property} • Unit {payment.unit}
                </p>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="text-sm font-medium">{formatCurrency(payment.amount)}</div>
                <div className="flex items-center mt-1">
                  <Badge variant={getStatusVariant(payment.status)}>
                    {payment.status}
                  </Badge>
                  <span className="text-xs text-gray-500 ml-2">{payment.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPayments;