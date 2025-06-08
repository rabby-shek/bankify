import Widget from "@/components/Widget";
import { DollarSign } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Widget title="Total Balance" value="$13,245" icon={<DollarSign className="text-white" />} />
      <Widget title="Number of Bank Accounts" value="12" />
      <Widget title="This Month’s Transactions" value="93" />
      <Widget title="Pending Transfers" value="3" />
    </div>
  );
}
