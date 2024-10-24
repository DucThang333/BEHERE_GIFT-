import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";
import Feature from "./components/feature";
import { Menu } from "./constant";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const [selected, setSelected] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const menu = Menu;
  const handleSelect = (select) => {
    if (select?.router) router.push(select.router);
    setSelected(select);
  };

  useEffect(() => {
    let select = null;
    menu.map((m) => {
      select = m?.subMenu?.find((s) => s?.router == pathname);
      if (select) {
        setSelected(select);
      }
      return;
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="ml-5">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={80}
            height={22}
            priority
          />
        </div>
      </div>
      <div>
        {menu.map((m) => {
          if (m?.subMenu?.length > 0)
            return (
              <Feature
                key={m.id}
                data={m}
                onFunc={handleSelect}
                selected={selected}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
