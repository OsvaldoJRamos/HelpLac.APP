import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

import BarberLogo from '../../assets/teste.svg';

export default () => {
    
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
                if(res.token) { 

                    await AsyncStorage.setItem('token', res.token);

                    // userDispatch({
                    //     type: 'setAvatar',
                    //     payload:{
                    //         avatar: res.data.avatar
                    //     }
                    // });

                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });

                } else {
                    console.log("ELSE 1");
                    navigation.navigate('SignIn');
                }
            } else {
                console.log("ELSE 2");
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}