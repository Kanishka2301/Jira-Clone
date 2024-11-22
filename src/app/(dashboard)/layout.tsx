interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-ful h-full">
        <div className="lg:pl-[264px]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
