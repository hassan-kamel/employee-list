// Interface for filters
interface Filters {
  search?: string;
  filter?: string;
  createdAt?: string;
  name?: string;
  job_title?: string;
  address?: string;
  department?: string;
}

// Interface for pagination
interface Pagination {
  page?: number;
  limit?: number;
}

// Interface for sorting
interface Sorting {
  sortBy?: string;
  orderBy?: string;
  order?: "asc" | "desc";
}

// Combined interface for API parameters
export interface ApiParameters extends Filters, Pagination, Sorting {}
