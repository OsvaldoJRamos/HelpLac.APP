import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    margin-right: 4px;
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    z-index: 9;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;