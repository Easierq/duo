import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  );
};

export default layout;
