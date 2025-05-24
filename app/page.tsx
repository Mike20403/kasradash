"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Activity, Eye, Calendar } from "lucide-react"

// Mock data
const dashboardData = {
  stats: [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Page Views",
      value: "12,234",
      change: "+19%",
      icon: Eye,
      trend: "up",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+4.75%",
      icon: TrendingUp,
      trend: "up",
    },
  ],
  recentActivity: [
    { id: 1, user: "John Doe", action: "Created new project", time: "2 minutes ago" },
    { id: 2, user: "Jane Smith", action: "Updated profile", time: "5 minutes ago" },
    { id: 3, user: "Mike Johnson", action: "Completed task", time: "10 minutes ago" },
    { id: 4, user: "Sarah Wilson", action: "Left a comment", time: "15 minutes ago" },
  ],
}

export default function Dashboard() {
  const [selectedStat, setSelectedStat] = useState<any>(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardData.stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"}>{stat.change}</Badge>
                  <span>from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity Card with Modal */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions from your team members</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardData.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <div className="text-sm text-muted-foreground">{activity.time}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your dashboard settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">
                  <Activity className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Analytics Overview</DialogTitle>
                  <DialogDescription>Detailed analytics for your dashboard performance.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Page Views</span>
                      <span className="text-sm text-muted-foreground">12,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Unique Visitors</span>
                      <span className="text-sm text-muted-foreground">8,432</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Bounce Rate</span>
                      <span className="text-sm text-muted-foreground">23.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Avg. Session</span>
                      <span className="text-sm text-muted-foreground">4m 32s</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Report
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Schedule Report</DialogTitle>
                  <DialogDescription>Set up automated reports for your dashboard.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <p className="text-sm">Report will be generated and sent to your email weekly.</p>
                    <div className="flex items-center space-x-2">
                      <Badge>Weekly</Badge>
                      <Badge variant="outline">PDF Format</Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button className="w-full">Export Data</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
