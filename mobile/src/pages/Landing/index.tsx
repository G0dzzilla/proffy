import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import GiveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';


function Landing() {
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Welcome back, {'\n'}
                <Text style={styles.titleBold}>What would like to do?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button,
                    styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>
                <RectButton
                    onPress={handleNavigationToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={GiveClassesIcon} />

                    <Text style={styles.buttonText}>Tutor</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total of {totalConnections} connections already done.{' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;