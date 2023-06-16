import React from 'react';
import InformationIcon from '@/assets/icons/InformationIcon';
import StarIcon from '@/assets/icons/StarIcon';
import LeftSideBarImage from '@/assets/images/LeftSideBarImage';
import EarthIcon from '@/assets/icons/EarthIcon';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface LeftSideBarProps {}

const FocusVariants = cva(
  `
   cursor-pointer h-[34px] flex items-center
    hover:text-slate-700
  `,
  {
    variants: {
      variant: {
        default: '',
        focus: 'bg-slate-200 border-r-4 border-orange-400 font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const LeftSideBar = ({}: LeftSideBarProps) => {
  return (
    <nav
      className={`
        sticky top-[56px] mb-2 max-h-[100vh-56px]
        min-h-[596.88px] w-auto max-w-[164px] pt-6
        text-sm text-slate-600
    `}
    >
      <ol>
        <li className=" px-1 py-3">
          <span>Home</span>
        </li>
        <li className=" px-1 pt-3">
          <span>PUBLIC</span>
          <ol>
            <li>
              <div
                className={
                  cn(FocusVariants({ variant: 'focus' })) + ' flex items-center py-1 text-center'
                }
              >
                <EarthIcon className=" mr-1" />
                <span>Questions</span>
              </div>
            </li>
            <li className={cn(FocusVariants({ variant: 'default' })) + ' px-6 py-1 '}>
              <span>Tags</span>
            </li>
            <li className={cn(FocusVariants({ variant: 'default' })) + ' px-6 py-1 '}>
              <span>Users</span>
            </li>
            <li className={cn(FocusVariants({ variant: 'default' })) + ' px-6 py-1 '}>
              <span>Companies</span>
            </li>
          </ol>
        </li>
        <li className=" px-1 pt-3">
          <div className=" flex items-center justify-between">
            <span>COLLECTIVES</span>
            <InformationIcon />
          </div>

          <ol>
            <li className="">
              <div className="flex items-center text-center">
                <StarIcon className=" mr-1" />
                <span className={cn(FocusVariants({ variant: 'default' }))}>
                  Explore Collectives
                </span>
              </div>
            </li>
          </ol>
        </li>
        <li className=" px-1 pt-3">
          <span>TEAMS</span>
          <div className=" mt-3 rounded-sm border border-slate-200 px-1 py-2">
            <p>
              <span className=" font-bold">Stack Overflow for Teams</span> - Start collaborating and
              sharing organizational knowledge.
            </p>
            <LeftSideBarImage />
            <div className=" flex flex-col items-center justify-center text-xs">
              <button
                className={`
               my-2 h-[27.88px] w-[139px]
              rounded-sm bg-orange-400 px-3 pb-2 pt-1 text-white
              `}
              >
                Create a free Team
              </button>
              <button
                className={`
                 h-[27.88px] w-[139px] rounded-sm hover:bg-slate-100
              `}
              >
                <a href="">Why Teams</a>
              </button>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default LeftSideBar;
