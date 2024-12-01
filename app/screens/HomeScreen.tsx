import React from 'react';
import { VStack, Box, Text, useBreakpointValue } from '@gluestack-ui/themed-native-base';
import Header from '../components/Header';
import Calendar from '../components/Calendar';

const HomeScreen: React.FC = () => {
  const isTablet = useBreakpointValue({ base: false, md: true });

  return (
    <VStack flex={1} bg="gray.100">
      <Header title="My App" />
      <Box flex={1} p={4} justifyContent="center" alignItems="center">
        <Calendar />
        <Text mt={4}>{isTablet ? 'Tablet View' : 'Phone View'}</Text>
      </Box>
    </VStack>
  );
};

export default HomeScreen;
