import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';



function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container} >
            <ImageBackground
                resizeMode='contain'
                source={giveClassesBgImage}
                style={styles.content}
            >

                <Text style={styles.title}>Do you want to be a Proffy?</Text>
                <Text style={styles.description}>
                    To start, you need to register as a Teacher in our web platform.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>OK</Text>
            </RectButton>

        </View>
    );
}

export default GiveClasses;