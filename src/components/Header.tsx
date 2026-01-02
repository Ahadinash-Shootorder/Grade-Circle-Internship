import React from 'react';

export const Header = () => {
  return (

    <>
      {/* Mobile: centered, smaller logo */}
      <img
        className="block md:hidden absolute top-4 left-1/2 -translate-x-1/2 w-[200px] h-auto object-contain z-20"
        alt="Gradcircle white"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
      />
      {/* Tablet: positioned like desktop but adjusted */}
      <img
        className="hidden md:block lg:hidden absolute top-6 left-8 w-[250px] h-auto object-contain z-20"
        alt="Gradcircle white"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
      />
      {/* Desktop: original position */}
      <img
        className="hidden lg:block absolute top-[27px] left-[50px] w-[310px] h-[54px] object-cover z-20"
        alt="Gradcircle white"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
      />
    </>
  );
};