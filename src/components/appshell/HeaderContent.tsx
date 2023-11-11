import { Header, Title } from "@mantine/core";
import { useContext } from "react";
import { Auth } from "src/context";
import HeaderDropdown from "src/components/appshell/HeaderDropdown";
export default function NavbarContent() {
  const { isLoggedIn } = useContext(Auth);
  return (
    <Header height={50} className="flex flex-row items-center justify-center m-0 p-0">
      <Title order={3} className="py-2 m-auto" align="center">
        Blog App
      </Title>
      {isLoggedIn && (
        <HeaderDropdown/>
      )}
    </Header>
  );
}
