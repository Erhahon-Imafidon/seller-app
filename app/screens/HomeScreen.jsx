import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')}
            >
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Sell what you don't need</Text>
                <View style={styles.login}></View>
                <View style={styles.register}></View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    background: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        paddingTop: 100,
    },

    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
    },

    text: {
        color: '#000',
    },

    login: {
        backgroundColor: '#fc5c65',
        width: '100%',
        height: 70,
        marginTop: 'auto',
    },

    register: {
        backgroundColor: '#4ecdc4',
        width: '100%',
        height: 70,
    },
});

export default HomeScreen;
