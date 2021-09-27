import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LoadingIcon,
    ListArea
} from './styles';

import ProductItem from '../../components/ProductItem';

import SearchIcon from '../../assets/search.svg';

export default () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getProducts();
        if (res) {
            setList(res.itens);
        } else {
            alert("Erro ao carregar produtos.");
        }

        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getProducts();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Adicionados Recentemente</HeaderTitle>
                </HeaderArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }

                <ListArea>
                    {list.map((item, k) => (
                        <ProductItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    );
}