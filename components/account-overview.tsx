"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ManagePlanModal } from "@/components/manage-plan-modal"

export function AccountOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Account overview</CardTitle>
          <CardDescription>Current subscription and workspace details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Plan</p>
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Plus</Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Workspace Id</p>
              <p className="text-sm text-foreground">plaace-workspace-001</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Billing Email</p>
              <p className="text-sm text-foreground">manager.property@plaace.co</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Active members</p>
              <p className="text-sm text-foreground">6 admins, 398 members, 6 pending invites</p>
            </div>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            Manage Plan
          </Button>
        </CardContent>
      </Card>

      <ManagePlanModal open={isModalOpen} onOpenChange={setIsModalOpen} currentPlan="Plus" />
    </>
  )
}
