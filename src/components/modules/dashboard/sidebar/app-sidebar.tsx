"use client";

import * as React from "react";
import {
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/modules/dashboard/sidebar/nav-main";
import { NavUser } from "@/components/modules/dashboard/sidebar/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/app/assets/svgs/Logo";
import Link from "next/link";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/user/dashboard",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Shop",
            url: "/user/shop/all-products",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Manage Products",
                    url: "/user/shop/products",
                },
                {
                    title: "Manage Categories",
                    url: "/user/shop/category",
                },
                {
                    title: "Manage Brands",
                    url: "/user/shop/brand",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
            items: [
                {
                    title: "Profile",
                    url: "/profile",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex items-center justify-center">
                                    <Logo />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <h2 className="font-bold text-xl">
                                        NextMart
                                    </h2>
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
