"use client"

import React from "react" // Changed from import type React
import { Sidebar } from "@/components/sidebar"
import { BookOpen, GraduationCap, BarChart, Calendar, Users, FileText, Settings } from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <BarChart className="h-4 w-4" />,
  },
  {
    title: "Applications",
    href: "/dashboard/applications",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Schools",
    href: "/dashboard/schools",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    title: "Schedule",
    href: "/dashboard/schedule",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Resources",
    href: "#",
    icon: <BookOpen className="h-4 w-4" />,
    items: [
      {
        title: "Essay Guides",
        href: "/dashboard/resources/essays",
      },
      {
        title: "Interview Prep",
        href: "/dashboard/resources/interviews",
      },
      {
        title: "Test Prep",
        href: "/dashboard/resources/tests",
      },
    ],
  },
  {
    title: "Counselors",
    href: "/dashboard/counselors",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-4 w-4" />,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} className="w-64 border-r" />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

