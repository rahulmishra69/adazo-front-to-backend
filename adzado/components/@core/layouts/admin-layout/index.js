// React
import React from 'react'
// Sections
import Header from '../../components/admin-header'
import Sidebar from '../../components/admin-sidebar'
const AdminLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
        <div className='flex flex-1 flex-col xl:pl-64 lg:pl-[203px] pl-0 w-full'>
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
