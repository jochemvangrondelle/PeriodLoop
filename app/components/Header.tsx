import React from 'react';
import { Box, Text } from '@gluestack-ui/themed-native-base';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Box bg="blue.600" py={4} px={2}>
    <Text color="white" fontSize="xl" fontWeight="bold">
      {title}
    </Text>
  </Box>
);

export default Header;
