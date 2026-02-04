import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LibraryScreen({ route, navigation }) {
    const { bookId } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book Detail</Text>
            <Text style={styles.bookId}>Book ID: {bookId}</Text>
            <Button
                title="Add Reading Session"
                onPress={() => navigation.navigate("AddSession", { bookId })}
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
    bookId: {
        fontSize: 18,
        marginBottom: 20,
    },
});