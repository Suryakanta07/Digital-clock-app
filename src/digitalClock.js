import React, {useState} from 'react';


const DigitalClock = () => {

  let time = new Date().toLocaleTimeString();

   const [ctime, setCtime] = useState(time);

   const UpdateTime = () => {

    time =  new Date().toLocaleTimeString();
    setCtime(time);
   }
   setInterval(UpdateTime,1000)

  return(
    <div className='center'> 
      <div className='a'>
        <h1>DIGITAL CLOCK</h1>

        <div className='b'>
        <h1>{ctime}</h1>
      </div>

      </div>
    </div>
    
  );
};
export default DigitalClock;

