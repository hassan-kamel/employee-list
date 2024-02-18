import data from "../../assets/db.json";

export const uniqueDepartments: string[] = Array.from(
  new Set(data.map((item) => item.department))
);
