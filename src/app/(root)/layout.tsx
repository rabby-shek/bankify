import Navbar from "@/components/Navbar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getLoggedInUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
