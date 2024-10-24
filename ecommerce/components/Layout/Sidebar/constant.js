import { HISTORY_ACTIVITY, ROLE } from "@/routers/constant";
import Image from "next/image";
export const Menu = [
  {
    id: 1,
    parentId: 0,
    description: "Dashboards",
    icon: (
      <Image src={"/icons8-home.svg"} alt="icon home" width={18} height={18} />
    ),
    subMenu: [
      {
        id: 2,
        parentId: 1,
        description: "Chart Value",
        router: "",
      },
      {
        id: 3,
        parentId: 1,
        description: "Chart account",
        router: "",
      },
    ],
  },
  {
    id: 5,
    parentId: 0,
    description: "System",
    icon: (
      <Image
        src={"/system-97.svg"}
        alt="icon permission"
        width={18}
        height={18}
      />
    ),
    subMenu: [
      {
        id: 6,
        parentId: 5,
        description: "Roles",
        router: ROLE,
      },
      {
        id: 7,
        parentId: 5,
        description: "History Activity",
        router: HISTORY_ACTIVITY,
      },
      {
        id: 8,
        parentId: 5,
        description: "Setting",
        router: "",
      },
    ],
  },
];
