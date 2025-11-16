import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackHeaderProps;

export default function CustomAppBar({ navigation, back, options }: Props) {
  const title =
    options.title !== undefined
      ? options.title
      : (options as any).headerTitle ?? '';

  return (
    <Appbar.Header>
        {back ? (
        <>
            <Appbar.BackAction onPress={navigation.goBack} />
            <Appbar.Content title={title}  />
        </>
        ) : (
        <>
            <Appbar.Content title={title} style={{ marginLeft: 16 }}/>
            <Appbar.Action
            icon="arrow-right"
            onPress={() => navigation.navigate('SecondScreen')}
            />
        </>
        )}
    </Appbar.Header>
    );
}