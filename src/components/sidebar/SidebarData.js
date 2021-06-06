import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'CLUB',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PREMIER LEAGUE',
        path: './premierleague',
        index : '1',
        icon: <IoIcons.IoIosPaper />
      },
      { 
        title: 'LA LIGA',
        path: '/laliga',
        inex : '2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'SERIA A',
        path: '/seria',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'BUNDESRIGA',
        path: '/bundesriga',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'LIGUE 1',
        path: '/ligue1',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'NATIONAL',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'EUROPE',
        path: '/europe',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AISA',
        path: '/asia',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AMERICA',
        path: '/america',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AFRICA',
        path: '/africa',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'OCEANIA',
        path: '/oceania',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'LEGEND',
    path: '/Legend',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'MATCH WORN',
    path: '/matchworn',
    icon: <IoIcons.IoMdPeople />
  },
  // {
  //   title: 'CLEARANCE',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />
  // },
  
  {
    title: 'CART',
    path: '/cart',
    icon: <FaIcons.FaEnvelopeOpenText />,

  },
  
];
