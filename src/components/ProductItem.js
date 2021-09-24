import React from 'react';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import Stars from '../components/Stars';

import PositiveIcon from '../assets/positive.svg';
import NegativeIcon from '../assets/negative.svg';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

const SeeProfileButton = styled.View`
    width: 100px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #268596;
`;

const ContaisLactoseWarning = styled.View`

    flex-direction: row;
    height: 26px;
`;

const ContaisLactoseWarningText = styled.Text`
    margin-top: 1px;
    margin-left: 10px;
    font-size: 15px;
    color: #737373;
`;


export default ({ data }) => {
    console.log("DATA " + data.name)
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Product', {
            id: data.id,
            name: data.name,
            image: data.image,
            containsLactose: data.containsLactose,
            ingredients: data.ingredients
        });
    }

    return (
        <Area onPress={handleClick}>
            <Avatar source={{ uri: data.image }} />
            <InfoArea>
                <UserName>{data.name}</UserName>
                {data.containsLactose == true ?
                    <ContaisLactoseWarning>
                        <PositiveIcon width="27" height="26"/>
                        <ContaisLactoseWarningText>Contém Lactose</ContaisLactoseWarningText>
                    </ContaisLactoseWarning>
                    :
                    <ContaisLactoseWarning>
                        <NegativeIcon width="27" height="26"/>
                        <ContaisLactoseWarningText>Não contém lactose</ContaisLactoseWarningText>
                    </ContaisLactoseWarning>
                }

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Detalhes</SeeProfileButtonText>
                </SeeProfileButton>

            </InfoArea>
        </Area>
    );
}