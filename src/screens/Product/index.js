import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import {
    Container,
    Scroller,
    FakeSwiper,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    PageBody,
    UserInfoArea,
    ServiceArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserInfoDescription,
    UserFavButton,
    BackButton,
    LoadingIcon,

    IngredientsArea,
    IngredientsTitle,
    IngredientsDescription,

    CommentArea,
    CommentTitle,
    IconNextComment
} from './styles';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        name: route.params.name,
        image: route.params.image,
        containsLactose: route.params.containsLactose,
        ingredients: route.params.ingredients
    });

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getBarberInfo = async () => {
            setLoading(true);
            let json = await Api.getProduct(userInfo.id);
            console.log("JSON " + json.name);
            console.log("JSON DATA " + json.data);
            setUserInfo(json);

            setLoading(false);
        };

        getBarberInfo();

    }, []);

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleClickComments = () => {
        console.log("click");
        navigation.navigate('Comments', {
            productId: userInfo.id,
            productName: userInfo.name
        });
    }

    return (
        <Container>
            <Scroller>
                <FakeSwiper></FakeSwiper>
                <PageBody>
                    {userInfo.containsLactose == false ?
                        <UserInfoArea backgroundColor="#64AF5A">
                            <UserInfo>
                                <UserInfoName>{userInfo.name}</UserInfoName>
                                <UserInfoDescription>Fique Tranquilo!</UserInfoDescription>
                                <UserInfoDescription>Este produto não contém lactose.</UserInfoDescription>
                            </UserInfo>
                        </UserInfoArea>
                        :
                        <UserInfoArea backgroundColor="#AF5A5A">
                            <UserInfo>
                                <UserInfoName>{userInfo.name}</UserInfoName>
                                <UserInfoDescription>ATENÇÃO!</UserInfoDescription>
                                <UserInfoDescription>Pode conter lactose neste produto.</UserInfoDescription>
                            </UserInfo>
                        </UserInfoArea>}

                    <IngredientsArea>
                        <IngredientsTitle>Ingredientes</IngredientsTitle>
                        <IngredientsDescription>{userInfo.ingredients}</IngredientsDescription>
                    </IngredientsArea>

                    <CommentArea>
                        <CommentTitle>Comentários</CommentTitle>
                        <IconNextComment onPress={handleClickComments}>
                            <NavNextIcon width="35" height="35" fill="#000000" />
                        </IconNextComment>
                    </CommentArea>
                    {loading &&
                        <LoadingIcon size="large" color="#000000" />}
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#FFFFFF" />
            </BackButton>
        </Container >
    );
}