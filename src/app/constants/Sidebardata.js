import { MdProductionQuantityLimits } from "react-icons/md";
import { SiAndela,Si9Gag ,SiGooglepubsub } from "react-icons/si";
import { CgShutterstock, CgProfile } from "react-icons/cg";
import { MdCrisisAlert,MdOutlineBusAlert } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaSquarePollVertical } from "react-icons/fa6";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import React from "react";
export const sidebarData = [
    {
      label: "Product And Stock",
      items: [
        { title: "Products", icon: <MdProductionQuantityLimits/>, path: "/dashboard/product" },
        { title: "Purchase", icon: <SiAndela />, path: "/dashboard/purchase"},
        { title: "Damages", icon: <Si9Gag />, path: "/dashboard/damages"},
        { title: "Stock", icon: <CgShutterstock />, path: "/dashboard/stocks"},
      ],
    },
    {
      label: "Pos And Orders",
      items: [
        { title: "POS", icon: <MdCrisisAlert />, path: "/dashboard/pos"},
        { title: "POS Orders", icon: <MdOutlineBusAlert />, path: "/dashboard/posOrder"},
      ],
    },
    {
      label: "USERS",
      items: [
        { title: "Administrators", icon: <CgProfile />,path: "/dashboard/administrator"},
        { title: "Customers", icon: <SiGooglepubsub />, path: "/dashboard/Customers"},
        { title: "Employee", icon: <GrUserManager />, path: "/dashboard/employe"},
      ],
    },

    {
      label: "REPORTS",
      items: [
        { title: "Sales Report", icon: <RiGitRepositoryCommitsLine /> , path: "/dashboard/salesReport"},
        { title: "Products Report", icon: <FaSquarePollVertical />, path: "/dashboard/productReport" },
        
      ],
    },

    {
      label: "SETUP",
      items: [
        { title: "Settings", icon: <MdOutlineSettings />,path:"/dashboard/setting" },
        
        
      ],
    },
  ];