import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity
} from 'react-native';

function Start({ navigation }) {
    return (
        <ImageBackground source={require("../assets/images/background.png")} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{
                        width: 250,
                        height: 76.2,
                        marginHorizontal: 10
                    }}
                    source={require("../assets/images/logo.png")}
                />
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 50,
                    right: 30,
                    padding: 10,
                    paddingHorizontal: 20,
                    backgroundColor: '#acf4bc',
                    borderRadius: 25,
                }}
                    onPress={() => navigation.navigate('signup')}>
                    <Text style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: '700',
                        letterSpacing: .5
                    }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    labels: {
        marginTop: 20,
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    textInput: {
        borderBottomWidth: 1,
        width: 200
    }
});
export default Start;
