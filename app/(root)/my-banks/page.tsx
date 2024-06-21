import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import React from 'react';

interface Account {
  id: string;
  fullName: string;
  currentBalance: number;
  bankCardNumber: string;
  date: string;
  shareableId: string;
}

interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}


const accounts: Account[] = [
  {
    id: "acc1",
    fullName: "John Doe",
    currentBalance: 2500.75,
    bankCardNumber: "12345678901218915",
    date: "2024-06-07",
    shareableId: "3f72c7e1f1c847e29c1a5982a0379423"
  },
  {
    id: "acc2",
    fullName: "Jane Smith",
    currentBalance: 3780.25,
    bankCardNumber: "4321876521091827",
    date: "2024-06-07",
    shareableId: "bd8e69d2ef824c40a8e5b5f61b2a8b92"
  },
];

const MyBanks: React.FC = () => {
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title='My Bank Accounts'
          subtext='Effortlessly manage your banking activities.'
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts.map((account) => (
              <BankCard
                key={account.id}
                account={account}
                userName={account.fullName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBanks;
