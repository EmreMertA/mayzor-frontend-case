import React from 'react';

type Props = {
  type: string;
  warning?: boolean;
};

const Badge: React.FC<Props> = ({ type }) => {
  if (type === 'Aktif') {
    return (
      <div className={`flex justify-center`}>
        <p className='text-[#27AE60] bg-[#E2F5EA] font-bold rounded-full  w-fit  py-1 px-3'>
          {type}
        </p>
      </div>
    );
  }

  if (type === 'Kısıtlandı') {
    return (
      <div className={`flex justify-center`}>
        <p
          className={`text-[#EB5757] bg-[#FADBD0] rounded-full font-bold  py-1 px-3`}
        >
          {type}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex justify-center`}>
      <p
        className={`text-[#E41761] bg-[#FCE8EF] rounded-full font-bold  py-1 px-3`}
      >
        {type}
      </p>
    </div>
  );
};

export default Badge;
