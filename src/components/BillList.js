import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const BillList = () => {
  const { globalBills, setGlobalBills } = useContext(GlobalContext);
  
  return (
    <div>
      Bill List Component
    </div>
  )
}

export default BillList
