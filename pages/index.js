import Image from 'next/image'
import withAuth from '@/components/auth/Authentication'
import { useState } from 'react';
import UserTable from '@/components/common/UsersTable';
import { useTranslation } from 'react-i18next';



 function Home() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
  ];

  const {t} = useTranslation()

  return (
   <>
   <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{t('table')}</h1>
      <UserTable users={users} />
    </div>
   </>
  )
}



export default withAuth(Home)

