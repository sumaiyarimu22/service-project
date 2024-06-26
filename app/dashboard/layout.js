import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='w-full flex justify-between items-start  relative '>
          <div className='w-72 h-screen sticky bg-gray-800 top-0 left-0'>
            <DashboardNavbar />
          </div>
          <div className='w-full h-full px-5'> {children}</div>
        </div>
      </body>
    </html>
  );
}
