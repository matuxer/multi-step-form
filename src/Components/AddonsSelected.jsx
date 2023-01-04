import React from 'react'

function AddonsSelected({addon, frequency}) {
  console.log(addon);
  return (
    <div className='w-full flex flex-row justify-between'>
      <h4 className="font-ubuntu text-sm text-coolGray">{addon.name}</h4>
      <h4 className="font-ubuntu text-sm text-marineBlue-1">{
        (frequency === 'monthly') ? `$${addon.price}/mo` : `$${addon.price * 10}/yr`
      }</h4>
    </div>
  )
}

export default AddonsSelected