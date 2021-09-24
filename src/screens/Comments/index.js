import React, { useState, useEffect } from 'react';
import { Text, RefreshControl } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import CommentItem from '../../components/CommentItem';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,

    BackButton,

    LoadingIcon,
    ListArea
} from './styles';

import Api from '../../Api';
import NewComment from '../../components/NewComment';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const [productInfo, setProductInfo] = useState({
        id: route.params.productId,
        name: route.params.productName
    });

    const getComments = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getComments(productInfo.id);
        console.log("Comentarios" + res);
        if (res) {
            console.log("Comentarios " + res.itens);
            setList(res);
        } else {
            alert("Erro ao carregar comentários.");
        }

        setLoading(false);
    }

    useEffect(() => {
        getComments();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getComments();
    }

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={1}>{productInfo.name}</HeaderTitle>
                </HeaderArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }

                <ListArea>
                    {list.map((item, k) => (
                        <CommentItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>

            <NewComment productId={productInfo.id}></NewComment>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#FFFFFF" />
            </BackButton>
        </Container>
    );
}
