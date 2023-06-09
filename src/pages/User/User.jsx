import { Flex } from "@chakra-ui/react";
import SideBar from "../../components/SideBar/SideBar";
import RoutingUser from "../../components/Routing/RoutingUser";

const User = () => {
  return (
    <Flex>
      <SideBar />
      <Flex flex="1" padding="4" width="calc(100% - 250px)">
        <RoutingUser />
      </Flex>
    </Flex>
  );
};

export default User;
