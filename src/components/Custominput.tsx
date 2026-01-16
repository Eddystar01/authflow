import { TextInput, StyleSheet } from 'react-native';
import { TextInputProps } from 'react-native';

type CustomInputProps = {
    // custom fields
} & TextInputProps;

export default function CustomInput(props: CustomInputProps) {
    return (
        <TextInput style={styles.input} {...props} />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#ccc',
    },
});