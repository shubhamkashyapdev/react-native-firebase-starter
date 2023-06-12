import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonType = {
  handleClick: () => void;
  children: string;
};

const PrimaryButton: React.FC<ButtonType> = ({handleClick, children}) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      activeOpacity={0.7}
      className="text-black text-center text-xl font-medium bg-indigo-700 px-4 py-2 rounded-md shadow-md">
      <Text className="font-semibold">{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
