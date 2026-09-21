import type { MetadataRoute } from "next";
import { articles } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hrgridnx.example";
  const routes = ["", "/product", "/pricing", "/customers", "/resources", "/about", "/contact", "/security", "/login", "/solutions/admin", "/solutions/hr-manager", "/solutions/department-head", "/solutions/finance-manager", "/solutions/team-leader", "/solutions/employee"];
  return [...routes.map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })), ...articles.map(article => ({ url: `${base}/resources/${article.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: .6 }))];
}
