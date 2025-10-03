"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

interface InviteUserModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function InviteUserModal({ open, onOpenChange }: InviteUserModalProps) {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("member")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle invitation logic here
    console.log("[v0] Sending invitation to:", email, "with role:", role)
    onOpenChange(false)
    setEmail("")
    setRole("member")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Invite User</DialogTitle>
          <DialogDescription>Send an invitation to join your Plaace workspace.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="colleague@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium">
              Role
            </Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="role" className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="member">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Member</span>
                    <span className="text-xs text-muted-foreground">Can view and edit content</span>
                  </div>
                </SelectItem>
                <SelectItem value="admin">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Admin</span>
                    <span className="text-xs text-muted-foreground">Full access to all features</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Can view and edit content</p>
          </div>

          <Alert className="border-orange-200 bg-orange-50">
            <Info className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-sm text-orange-800">
              An invitation email will be sent to the user with instructions to join your workspace.
            </AlertDescription>
          </Alert>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send Invitation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
