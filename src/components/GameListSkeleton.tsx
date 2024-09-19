import { HStack, Skeleton } from "@chakra-ui/react";

const GameListSkeleton = () => {
  return (
    <HStack>
      <Skeleton width="32px" height="32px" borderRadius="8px" />
      <Skeleton width="100px" height="8px" />
    </HStack>
  );
};

export default GameListSkeleton;
