import React, {useState} from 'react';
import AddNewPlan from "./AddNewPlan";


function UserPlans({userData}) {
  const [isAddNewPlanVisible, setAddNewPlanVisible] = useState(false)
  
  const handleOn = () => {
    setAddNewPlanVisible(true)
  }
  const handleAddNewPlanVisible = (value) => {
    setAddNewPlanVisible(value)
  }
  
  return (
    <div className={'userPlans'}>
      <div className={'userPlans__display'}>
        <div className={'userPlans__box userPlans__box-add'}>
          <button className={'btn userPlans__btn'} onClick={handleAddNewPlanVisible}>
            Create plan
          </button>
        </div>
        <AddNewPlan isAddNewPlanVisible={isAddNewPlanVisible} handleAddNewPlanVisible={handleAddNewPlanVisible}
        userData={userData}/>
      </div>
    </div>
  );
}

export default UserPlans;