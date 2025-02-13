"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

function NavBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean).slice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/admin/">Admin Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          return (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/admin/${segments.slice(0, index + 1).join("/")}`}
                  className="capitalize"
                >
                  {segment}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default NavBreadcrumbs;
