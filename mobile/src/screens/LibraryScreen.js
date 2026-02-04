import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LibraryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Library Screen</Text>
            <Button
                title="Go to Book Detail"
                onPress={() => navigation.navigate("BookDetail", { bookId: 1 })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
});