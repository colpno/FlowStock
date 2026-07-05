# FlowStock

> Enterprise-grade Order & Inventory Management System built with Next.js 15.

FlowStock is a modern Order Management System (OMS) designed for small and medium-sized businesses that manage inventory across one or more warehouses. It streamlines the entire order fulfillment lifecycle—from inventory tracking and purchase orders to customer order processing and shipping.

The project is built to explore modern full-stack development using Next.js App Router, Server Components, Server Actions, PostgreSQL, and Prisma while modeling real-world business workflows found in ERP, OMS, and Warehouse Management Systems.

---

## Key Features

### Authentication & Authorization

- Secure authentication
- Role-Based Access Control (RBAC)
- Protected routes
- Permission-based actions

### Product Management

- Product catalog
- Categories
- SKU management
- Product status

### Warehouse Management

- Multiple warehouses
- Warehouse-specific inventory
- Stock transfers
- Inventory overview

### Inventory Management

- Available stock
- Reserved stock
- Stock adjustments
- Inventory movement history

### Purchase Orders

- Supplier management
- Purchase order creation
- Receiving inventory
- Automatic stock updates

### Order Management

- Customer orders
- Order lifecycle
- Order status tracking
- Order history

### Inventory Reservation

Prevent overselling by reserving inventory before shipment.

```
Stock
100

Reserved
30

Available
70
```

Reserved inventory is deducted from available stock but not from physical inventory until the order is shipped.

### Approval Workflow

Business rules can require approval before an order proceeds.

Example:

- Discount >10%
- Manager approval required
- Warehouse notified after approval

### Dashboard & Analytics

- Sales overview
- Inventory statistics
- Low stock alerts
- Revenue reports
- Order metrics

---

## Business Workflow

```
Supplier
      │
      ▼
Purchase Order
      │
      ▼
Inventory
      │
      ▼
Customer Order
      │
      ▼
Inventory Reservation
      │
      ▼
Picking
      │
      ▼
Packing
      │
      ▼
Shipping
      │
      ▼
Completed
```

---

## User Roles

### Administrator

- Manage users
- Manage roles
- System configuration

### Sales

- Create customer orders
- View customer information

### Warehouse Staff

- Pick orders
- Pack orders
- Ship orders
- Adjust inventory

### Purchasing

- Create purchase orders
- Receive inventory
- Manage suppliers

### Manager

- Approve discounts
- Monitor KPIs
- Review reports

---

## Core Business Rules

- Inventory cannot become negative.
- Orders reserve inventory before shipment.
- Cancelling an order releases reserved inventory.
- Every inventory change creates a stock movement record.
- Products with order history cannot be deleted.
- Orders requiring approval cannot be packed until approved.

---

## Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- TanStack Table
- Recharts

### Backend

- Next.js Server Actions
- Route Handlers
- Auth.js
- Zod

### Database

- PostgreSQL
- Prisma ORM

---

## Planned Modules

- Authentication
- User & Role Management
- Products
- Categories
- Warehouses
- Inventory
- Suppliers
- Purchase Orders
- Customer Orders
- Inventory Reservation
- Approval Workflow
- Dashboard & Analytics
- Notifications
- Audit Logs
