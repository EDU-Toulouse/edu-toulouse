"use client";

import * as React from "react";
import { Gamepad2, User2, UsersRound } from "lucide-react";

import { NavMain } from "@/app/admin/(components)/nav-main";
import { NavUser } from "@/app/admin/(components)/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Users",
      url: "/admin/users",
      icon: User2,
      isActive: false,
      items: [
        {
          title: "List",
          url: "/admin/users",
        },
        {
          title: "Create",
          url: "/admin/users/create",
        },
      ],
    },
    {
      title: "Teams",
      url: "/admin/teams",
      icon: UsersRound,
      isActive: false,
      items: [
        {
          title: "List",
          url: "/admin/teams",
        },
        {
          title: "Create",
          url: "/admin/teams/create",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Gamepad2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">EDU</span>
                  <span className="truncate text-xs">Toulouse</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
