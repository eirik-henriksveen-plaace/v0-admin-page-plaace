import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

const billingHistory = [
  {
    date: "Jan 1, 2025",
    description: "Plus Plan - Annual",
    amount: "$1,200.00",
    status: "Paid",
  },
  {
    date: "Jan 1, 2024",
    description: "Plus Plan - Annual",
    amount: "$1,200.00",
    status: "Paid",
  },
  {
    date: "Dec 1, 2023",
    description: "Plus Plan - Monthly",
    amount: "$120.00",
    status: "Paid",
  },
  {
    date: "Nov 1, 2023",
    description: "Plus Plan - Monthly",
    amount: "$120.00",
    status: "Paid",
  },
  {
    date: "Oct 1, 2023",
    description: "Plus Plan - Monthly",
    amount: "$120.00",
    status: "Paid",
  },
]

export function SubscriptionBilling() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription & Billing</CardTitle>
        <CardDescription>View billing history and manage payment methods</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Next billing date</p>
            <p className="text-sm text-foreground">January 1, 2026</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Payment method</p>
            <p className="text-sm text-foreground">Visa ending in 4242</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Billing cycle</p>
            <p className="text-sm text-foreground">Annual</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Amount</p>
            <p className="text-sm text-foreground">$1,200.00 USD</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Billing History</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Description</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 text-sm text-foreground">{item.date}</td>
                    <td className="py-4 text-sm text-foreground">{item.description}</td>
                    <td className="py-4 text-sm text-foreground">{item.amount}</td>
                    <td className="py-4">
                      <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">{item.status}</Badge>
                    </td>
                    <td className="py-4">
                      <Button variant="ghost" size="sm" className="h-8 gap-2 text-primary">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Update Payment Method</Button>
      </CardContent>
    </Card>
  )
}
