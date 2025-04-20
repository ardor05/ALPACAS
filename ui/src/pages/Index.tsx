
import { Logo } from "@/components/ui/logo";
import { RoleCard } from "@/components/ui/role-card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto space-y-12">
        <Logo className="flex justify-center mb-12 w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <RoleCard title="Buyer" path="/buyer" />
          <RoleCard title="Seller" path="/seller" />
        </div>
      </div>
    </div>
  );
};

export default Index;
