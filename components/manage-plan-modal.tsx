"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface ManagePlanModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentPlan: string
}

const plans = [
  {
    name: "Starter",
    description: "For small teams",
    price: "$49",
    period: "per month",
    features: ["Up to 50 members", "10GB storage", "Basic analytics", "Email support"],
  },
  {
    name: "Plus",
    description: "For growing teams",
    price: "$120",
    period: "per month",
    features: ["Up to 500 members", "100GB storage", "Advanced analytics", "Priority support", "Custom integrations"],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "SSO & advanced security",
    ],
  },
]

export function ManagePlanModal({ open, onOpenChange, currentPlan }: ManagePlanModalProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Manage Your Plan</DialogTitle>
          <p className="text-sm text-muted-foreground">Choose the plan that best fits your team's needs.</p>
        </DialogHeader>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
          {plans.map((plan) => {
            const isCurrentPlan = plan.name === currentPlan
            return (
              <div
                key={plan.name}
                className={`relative rounded-lg border-2 p-6 ${
                  isCurrentPlan ? "border-primary bg-primary/5" : "border-border bg-background"
                }`}
              >
                {isCurrentPlan && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Current Plan
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 rounded-lg border bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Annual billing</p>
              <p className="text-sm text-muted-foreground">Save 20% with annual payment</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={billingCycle === "monthly" ? "outline" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("monthly")}
                className={billingCycle === "monthly" ? "border-border" : ""}
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === "annual" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("annual")}
                className={billingCycle === "annual" ? "bg-primary text-primary-foreground" : ""}
              >
                Annual
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Current Plan</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
