import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <div className="lg:hidden flex top-0 items-center w-full h-[50px] bg-green-500 z-50 fixed border-b px-4">
      <MobileSidebar />
    </div>
  );
};
