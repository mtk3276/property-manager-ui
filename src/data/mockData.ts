// Mock Data for the Property Management App

// Properties
export const properties = [
  {
    id: 1,
    name: 'Lakeside Apartments',
    address: '123 Lake View Dr, Seattle, WA 98101',
    units: 24,
    occupancy: 22,
    status: 'Occupied' as const,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
  },
  {
    id: 2,
    name: 'Urban Heights',
    address: '456 Downtown Ave, Seattle, WA 98102',
    units: 36,
    occupancy: 28,
    status: 'Partially Occupied' as const,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
  },
  {
    id: 3,
    name: 'Parkview Residences',
    address: '789 Park Lane, Seattle, WA 98103',
    units: 18,
    occupancy: 18,
    status: 'Occupied' as const,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg'
  },
  {
    id: 4,
    name: 'Sunset Towers',
    address: '101 Sunset Blvd, Seattle, WA 98104',
    units: 42,
    occupancy: 38,
    status: 'Partially Occupied' as const,
    image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg'
  },
  {
    id: 5,
    name: 'Cedar Court',
    address: '202 Cedar St, Seattle, WA 98105',
    units: 12,
    occupancy: 0,
    status: 'Vacant' as const,
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg'
  }
];

// Tenants
export const tenants = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(206) 555-1234',
    property: 'Lakeside Apartments',
    unit: '101',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-01-01',
    rent: 1800,
    status: 'Active' as const
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(206) 555-5678',
    property: 'Lakeside Apartments',
    unit: '102',
    leaseStart: '2023-02-15',
    leaseEnd: '2024-02-15',
    rent: 1850,
    status: 'Active' as const
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'mchen@example.com',
    phone: '(206) 555-9012',
    property: 'Urban Heights',
    unit: '304',
    leaseStart: '2023-03-01',
    leaseEnd: '2024-03-01',
    rent: 2100,
    status: 'Active' as const
  },
  {
    id: 4,
    name: 'Jessica Davis',
    email: 'jdavis@example.com',
    phone: '(206) 555-3456',
    property: 'Parkview Residences',
    unit: '205',
    leaseStart: '2023-04-01',
    leaseEnd: '2024-04-01',
    rent: 1950,
    status: 'Active' as const
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'dwilson@example.com',
    phone: '(206) 555-7890',
    property: 'Sunset Towers',
    unit: '501',
    leaseStart: '2023-05-15',
    leaseEnd: '2023-11-15',
    rent: 2200,
    status: 'Notice Given' as const
  }
];

// Maintenance Requests
export const maintenanceRequests = [
  {
    id: 1,
    title: 'Leaking bathroom faucet',
    property: 'Lakeside Apartments',
    unit: '101',
    tenant: 'John Smith',
    priority: 'Medium' as const,
    status: 'Open' as const,
    date: '2023-10-15',
    description: 'The bathroom sink faucet is leaking continuously and wasting water.'
  },
  {
    id: 2,
    title: 'Broken heating system',
    property: 'Urban Heights',
    unit: '304',
    tenant: 'Michael Chen',
    priority: 'High' as const,
    status: 'In Progress' as const,
    date: '2023-10-12',
    description: 'The heating system is not working at all. It\'s getting cold at night.'
  },
  {
    id: 3,
    title: 'Light fixture replacement',
    property: 'Parkview Residences',
    unit: '205',
    tenant: 'Jessica Davis',
    priority: 'Low' as const,
    status: 'Completed' as const,
    date: '2023-10-05',
    description: 'The kitchen light fixture needs to be replaced.'
  },
  {
    id: 4,
    title: 'Refrigerator not cooling',
    property: 'Sunset Towers',
    unit: '501',
    tenant: 'David Wilson',
    priority: 'Urgent' as const,
    status: 'In Progress' as const,
    date: '2023-10-14',
    description: 'The refrigerator is not cooling properly and food is spoiling.'
  },
  {
    id: 5,
    title: 'Clogged toilet',
    property: 'Lakeside Apartments',
    unit: '102',
    tenant: 'Sarah Johnson',
    priority: 'Medium' as const,
    status: 'Open' as const,
    date: '2023-10-16',
    description: 'The toilet is clogged and won\'t flush properly.'
  }
];

// Payments
export const payments = [
  {
    id: 1,
    tenant: 'John Smith',
    property: 'Lakeside Apartments',
    unit: '101',
    amount: 1800,
    status: 'Paid' as const,
    date: '2023-10-01',
    method: 'Credit Card'
  },
  {
    id: 2,
    tenant: 'Sarah Johnson',
    property: 'Lakeside Apartments',
    unit: '102',
    amount: 1850,
    status: 'Paid' as const,
    date: '2023-10-02',
    method: 'Bank Transfer'
  },
  {
    id: 3,
    tenant: 'Michael Chen',
    property: 'Urban Heights',
    unit: '304',
    amount: 2100,
    status: 'Pending' as const,
    date: '2023-10-15',
    method: 'Credit Card'
  },
  {
    id: 4,
    tenant: 'Jessica Davis',
    property: 'Parkview Residences',
    unit: '205',
    amount: 1950,
    status: 'Overdue' as const,
    date: '2023-10-10',
    method: 'Check'
  },
  {
    id: 5,
    tenant: 'David Wilson',
    property: 'Sunset Towers',
    unit: '501',
    amount: 2200,
    status: 'Paid' as const,
    date: '2023-09-30',
    method: 'Bank Transfer'
  }
];

// Tasks
export const tasks = [
  {
    id: 1,
    title: 'Renew lease for John Smith',
    date: 'Nov 15, 2023',
    type: 'Lease Renewal' as const,
    completed: false
  },
  {
    id: 2,
    title: 'Quarterly inspection at Urban Heights',
    date: 'Oct 30, 2023',
    type: 'Inspection' as const,
    completed: true
  },
  {
    id: 3,
    title: 'Follow up on refrigerator repair',
    date: 'Oct 21, 2023',
    type: 'Maintenance' as const,
    completed: false
  },
  {
    id: 4,
    title: 'Collect late payment from Jessica Davis',
    date: 'Oct 20, 2023',
    type: 'Payment Collection' as const,
    completed: false
  },
  {
    id: 5,
    title: 'Annual property inspection at Parkview',
    date: 'Nov 5, 2023',
    type: 'Inspection' as const,
    completed: false
  }
];

// Stats for Dashboard
export const stats = [
  {
    title: 'Total Properties',
    value: 5,
    change: { value: '20%', positive: true }
  },
  {
    title: 'Total Units',
    value: 132,
    change: { value: '5%', positive: true }
  },
  {
    title: 'Occupancy Rate',
    value: '80%',
    change: { value: '3%', positive: false }
  },
  {
    title: 'Monthly Revenue',
    value: '$27,500',
    change: { value: '12%', positive: true }
  }
];