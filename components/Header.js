"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Abouts",
      link: "/aboutus",
    },

    {
      title: "Portfolio",
      link: "/portfolio",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         <Link href="/"><img src="./logo.png" className="w-[120px] h-[50px] z-10"/></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem >
          <Link color="foreground" href="/products " className="hover:text-[#2a72f0] hover:underline text-black">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/aboutus" className="hover:text-[#2a72f0] hover:underline text-black">
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link  href="/portfolio" className="hover:text-[#2a72f0] hover:underline text-black">
            Portfolio
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {/* <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link> */}
            <Link href={item.link}>{item.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
