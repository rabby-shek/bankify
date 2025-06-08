import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
interface widgetPros {
  title: string;
  value: string;
  icon?: ReactNode;
}
export default function Widget({ title, value, icon }: widgetPros) {
  return (
    <Card className="rounded-xl shadow-md border-1 bg-black">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-white text-sm font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-white text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
