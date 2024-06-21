import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <nav className='p-4'>
      <ul className='flex flex-col gap-3 pt-10'>
        <li>
          <Link
            href='/dashboard/add-product'
            className='text-gray-300 hover:text-white'
          >
            Add Product
          </Link>
        </li>
        <li>
          <Link
            href='/dashboard/all-product'
            className='text-gray-300 hover:text-white'
          >
            All Product
          </Link>
        </li>
        <li>
          <Link
            href='/dashboard/contact-info'
            className='text-gray-300 hover:text-white'
          >
            Contact Info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
