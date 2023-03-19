import { type FC } from 'react';
import { Text, SimpleGrid, Card, CardBody } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Users: FC<{ username: string; count?: number }> = ({
  username,
  count = 1,
}) => {
  return (
    <SimpleGrid columns={4} spacing={10}>
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        Object.keys([...Array(count)]).map((i) => (
          <Card key={i}>
            <CardBody>
              <StarIcon />
              <Text fontSize={18}>{username}</Text>
            </CardBody>
          </Card>
        ))
      }
    </SimpleGrid>
  );
};

export default Users;
