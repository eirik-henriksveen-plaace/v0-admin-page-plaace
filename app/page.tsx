import { AccountOverview } from "@/components/account-overview"
import { UsersAndRoles } from "@/components/users-and-roles"
import { SubscriptionBilling } from "@/components/subscription-billing"

export default function CompanyAdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground">Company Admin</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your Plaace account, users, and subscription details from one place.
          </p>
        </div>

        <div className="space-y-8">
          <AccountOverview />
          <UsersAndRoles />
          <SubscriptionBilling />
        </div>
      </div>
    </div>
  )
}
