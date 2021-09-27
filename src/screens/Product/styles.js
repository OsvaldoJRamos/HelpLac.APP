import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #D9D9D9;
`;

export const Scroller = styled.ScrollView`
    flex: 1;

`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
    flex: 1;
    width: null;
    height: null;
    resizeMode: contain;
`;

export const FakeSwiper = styled.View`
    height: 400px;
`;

export const PageBody = styled.View`
`;

export const UserInfoArea = styled.View`
    border-top-left-radius: 50px;
    margin-top: -50px;

`;

export const UserAvatar = styled.Image`
    width: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFFFF;
`;

///============================= USER
export const UserInfo = styled.View`
    flex: 1;
    align-items: center;
`;

export const UserInfoName = styled.Text`
    margin-top: 15px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserInfoDescription = styled.Text`
    color: #FFFFFF;
    font-size: 15px;
    margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
`;


///============================= INGREDIENTES
export const IngredientsArea = styled.View`
    margin-top: 5px;
    background-color: #FFFFFF;

`;

export const IngredientsTitle = styled.Text`
    margin-top: 8px;
    margin-left: 15px;
    color: #268596;
    font-size: 18px;
    font-weight: bold;
`;

export const IngredientsDescription = styled.Text`
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 15px;
    color: #268596;
    font-size: 15px;
`;

///============================= COMENTÁRIOS

export const CommentArea = styled.View`
    margin-top: 5px;
    background-color: #FFFFFF;
    min-height: 80px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const CommentTitle = styled.Text`
    margin-top: 8px;
    margin-left: 15px;
    color: #268596;
    font-size: 18px;
    font-weight: bold;
`;

export const IconNextComment = styled.TouchableOpacity`
    
`;

///============================= 

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
