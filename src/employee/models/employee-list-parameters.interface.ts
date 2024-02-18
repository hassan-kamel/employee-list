// Interface for filters
interface Filters {
  search: string | null;
  filter: string | null;
  createdAt: string | null;
  name: string | null;
  job_title: string | null;
  address: string | null;
  department: string | null;
}

// Interface for pagination
interface Pagination {
  page: number;
  limit: number;
}

// Interface for sorting
interface Sorting {
  sortBy: string | null;
  orderBy: string | null;
  order: "asc" | "desc";
}

// Combined interface for API parameters
export interface ApiParameters extends Filters, Pagination, Sorting {}
