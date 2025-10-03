"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { InviteUserModal } from "./invite-user-modal"
import { useState } from "react"

const users = [
  {
    name: "Sarah Mitchell",
    email: "sarah@plaace.co",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    initials: "SM",
    avatarColor: "bg-primary",
  },
  {
    name: "James Davidson",
    email: "james@plaace.co",
    role: "Member",
    status: "Active",
    lastActive: "5 minutes ago",
    initials: "JD",
    avatarColor: "bg-muted-foreground",
  },
  {
    name: "Emma Chen",
    email: "emma@plaace.co",
    role: "Admin",
    status: "Active",
    lastActive: "1 day ago",
    initials: "EC",
    avatarColor: "bg-muted-foreground",
  },
  {
    name: "Michael Park",
    email: "michael@plaace.co",
    role: "Member",
    status: "Pending",
    lastActive: "Invited 2 days ago",
    initials: "MP",
    avatarColor: "bg-muted-foreground",
  },
  {
    name: "Lisa Thompson",
    email: "lisa@plaace.co",
    role: "Member",
    status: "Active",
    lastActive: "3 hours ago",
    initials: "LT",
    avatarColor: "bg-muted-foreground",
  },
  {
    name: "David Wilson",
    email: "david@plaace.co",
    role: "Admin",
    status: "Active",
    lastActive: "1 hour ago",
    initials: "DW",
    avatarColor: "bg-muted-foreground",
  },
]

export function UsersAndRoles() {
  const [inviteModalOpen, setInviteModalOpen] = useState(false)

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Users and Roles</CardTitle>
            <CardDescription>Manage users and their roles in the workspace</CardDescription>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setInviteModalOpen(true)}
          >
            Invite User
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-semibold text-foreground">6</p>
              <p className="text-sm text-muted-foreground">Admin</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">398</p>
              <p className="text-sm text-muted-foreground">Member</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">6</p>
              <p className="text-sm text-muted-foreground">Pending Invites</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">User</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Email</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Role</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Last Active</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className={`${user.avatarColor} text-white text-xs`}>
                            {user.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-foreground">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{user.email}</td>
                    <td className="py-4">
                      <Badge
                        variant={user.role === "Admin" ? "default" : "secondary"}
                        className={
                          user.role === "Admin"
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-secondary text-secondary-foreground"
                        }
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <Badge
                        variant={user.status === "Active" ? "default" : "secondary"}
                        className={
                          user.status === "Active"
                            ? "bg-accent text-accent-foreground hover:bg-accent/90"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{user.lastActive}</td>
                    <td className="py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit role</DropdownMenuItem>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Remove user</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <InviteUserModal open={inviteModalOpen} onOpenChange={setInviteModalOpen} />
    </>
  )
}
