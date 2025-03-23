import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, GraduationCap, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#003366]">Dashboard</h1>
        <Button className="bg-[#003366] hover:bg-[#003366]/90">New Application</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 submitted, 5 in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Essay Review (Tomorrow)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Resources</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">5 new resources added</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Counselor Team</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Primary: Dr. Sarah Johnson</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Application Timeline</CardTitle>
            <CardDescription>Track your progress and upcoming deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Common App Profile</p>
                  <p className="text-sm text-muted-foreground">Completed on Aug 15, 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Personal Statement</p>
                  <p className="text-sm text-muted-foreground">Completed on Sep 20, 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Supplemental Essays</p>
                  <p className="text-sm text-muted-foreground">In progress (3/8 completed)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Letters of Recommendation</p>
                  <p className="text-sm text-muted-foreground">Pending (Due Oct 15, 2023)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Early Decision Applications</p>
                  <p className="text-sm text-muted-foreground">Not started (Due Nov 1, 2023)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled meetings with counselors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Essay Review Session</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 4:00 PM - 5:00 PM</p>
                  <p className="text-sm">Dr. Sarah Johnson</p>
                </div>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Interview Preparation</p>
                  <p className="text-sm text-muted-foreground">Oct 5, 2023, 3:30 PM - 4:30 PM</p>
                  <p className="text-sm">Michael Lee</p>
                </div>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Application Strategy</p>
                  <p className="text-sm text-muted-foreground">Oct 12, 2023, 5:00 PM - 6:00 PM</p>
                  <p className="text-sm">Aisha Olayan</p>
                </div>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </div>
              <Button variant="link" className="w-full mt-2 text-[#003366]">
                View All Sessions <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

