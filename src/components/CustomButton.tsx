import { Pressable, Text, StyleSheet } from 'react-native';
import { PressableProps } from 'react-native';

type CustomButtonProps = {
    // custom fields
    text: string;
} & PressableProps

export default function CustomButton({text, ...pressableprops}: CustomButtonProps) {
    return (
        <Pressable {...pressableprops} style={[styles.button]}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#4353fd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});