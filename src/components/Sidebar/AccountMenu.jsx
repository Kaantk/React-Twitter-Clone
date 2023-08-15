import React from 'react';

function UserBox() {
  return (
    <div className="sticky top-0 bg-white hover:bg-primary-light flex items-center justify-between rounded-full p-3 mb-3 z-10">
      <div className='flex items-center'>
        <img src="/img/ProfilePhoto.jpg" alt="Profile Photo" className='w-10 h-10 rounded-full mr-2'/>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>Kaan Tetik</span>
          <span className='text-xs text-gray-dark font-semibold'>@Kaan.tk3</span>
        </div>
      </div>
      <button>
        <img src="/Icons/OtherIcons/Ellipsis.svg" alt="Ellipsis" className='w-4 h-4' />
      </button>
    </div>
  );
}

export default UserBox;
