import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import SendIcon from '../assets/nav_next.svg';
import Api from '../Api';

export const Container = styled.SafeAreaView`
    width: 80%;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 2%;
    margin-bottom: 2%
`;

export const Area = styled.View`
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 15px;
`;

export const NewCommentArea = styled.View`
    justify-content: space-between;
    align-items: flex-start;
`;

export const NewCommentTitle = styled.Text`
    margin-top: 8px;
    color: #268596;
    font-size: 18px;
    font-weight: bold;
`;

export const NewCommentSubtitle = styled.Text`
    margin-top: 15px;
    margin-bottom: 30px;
    color: #268596;
    font-size: 15px;
`;

export const WriteCommentArea = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const CommentInput = styled.TextInput`
    padding: 5px;
    align-items: flex-start;
    font-size: 16px;
    background-color: #63C2D1;
    margin-bottom: 10px;
    border-radius: 30px;
    width: 80%;
`;

export const SendCommentButton = styled.TouchableOpacity`
    align-items: flex-end;
    background-color: #63C2D1;
    margin-bottom: 10px;
    border-radius: 50px;
`;

export default ({ productId, commentId }) => {
    const navigation = useNavigation();
    const [commentDescription, setCommentDescription] = useState('');

    const handleClick = () => {
        navigation.navigate('Product', {
            id: data.id,
            name: data.name,
            image: data.image,
            containsLactose: data.containsLactose,
            ingredients: data.ingredients
        });
    }

    const handleClickSendComment = async () => {
        console.log("productId asdadasd" + productId);
        console.log("commentId asdadasd" + commentId);
        console.log("commentDescription asdadasd" + commentDescription);
        let res = await Api.postComment(productId, commentId, commentDescription);

        alert('passou 2');
    }

    return ( 
        <Container> 
            <Area>
                <NewCommentArea>
                    <NewCommentTitle>Contribua com a comunidade</NewCommentTitle>
                    <NewCommentSubtitle>Qual a sua experiência com este produto?</NewCommentSubtitle>

                    <WriteCommentArea>

                        <CommentInput
                            placeholder="Escreva sua mensagem"
                            placeholderTextColor="#FFFFFF"
                            value={commentDescription}
                            onChangeText={t => setCommentDescription(t)} />

                        <SendCommentButton onPress={handleClickSendComment}>
                            <SendIcon width="35" height="35" fill="#268596" />
                        </SendCommentButton>
                    </WriteCommentArea>
                </NewCommentArea>
            </Area>
        </Container>
    );
}