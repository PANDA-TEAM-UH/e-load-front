import { Flex } from "@chakra-ui/react";
import SideBar from "../../components/SideBar/Sidebar";
import RoutingUser from "../../components/Routing/RoutingUser";

const User = () => {
  return (
    <Flex>
      <SideBar />
      <Flex flex="1" backgroundColor="#750b87" padding="4">
        <RoutingUser />
      </Flex>
    </Flex>
  );
};

export default User;
