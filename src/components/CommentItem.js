import React from 'react';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import Stars from '../components/Stars';

import PositiveIcon from '../assets/positive.svg';
import NegativeIcon from '../assets/negative.svg';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-top: 25px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const ReplyArea = styled.TouchableOpacity`
    margin-left: 10%;
    width: 90%;
    background-color: #FFFFFF;
    margin-top: 5px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const CommentArea = styled.View`
    margin-left: 30px;
    justify-content: space-between;
`;

const TitleArea = styled.View`
    margin-left: 10px;
`;

const UserName = styled.Text`
    font-size: 17px;
`;

const CreatedAt = styled.Text`
    font-size: 13px;
    font-style: italic;
`;

const CommentDescription = styled.Text`
    margin-top: 2px
    font-size: 20px;
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
        <Container>
            <Area onPress={handleClick}>
                <CommentArea>
                    <TitleArea>
                        <UserName>{data.userName}</UserName>
                        <CreatedAt>{data.createdAt}</CreatedAt>
                    </TitleArea>
                    <CommentDescription>{data.description}</CommentDescription>
                </CommentArea>
            </Area>

            {data.answers.map(r =>
                <ReplyArea>
                    <CommentArea>
                        <TitleArea>
                            <UserName>{r.userName}</UserName>
                            <CreatedAt>{r.createdAt}</CreatedAt>
                        </TitleArea>
                        <CommentDescription>{r.description}</CommentDescription>
                    </CommentArea>
                </ReplyArea>
            )}

        </Container>
    );
}