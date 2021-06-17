import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap spacing="30px">
      {[...Array(20)].map(() => (
        <WrapItem>
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "teal" }}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
