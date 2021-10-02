import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

import {
    Container,
    Scroller,

    HeaderArea,
    CommentInput,
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
    const [productName, setProductName] = useState('');

    const setFilterProductName = (name) => {
        console.log("FILTRO: " + name);
        setProductName(name);
        getProducts(name);
    }

    const getProducts = async (name = null) => {
        setLoading(true);
        setList([]);

        let res = await Api.getProducts(name);
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
                    <CommentInput
                        placeholder=" Escreva o nome do alimento"
                        placeholderTextColor="#FFFFFF"
                        value={productName}
                        onChangeText={t => setFilterProductName(t)} />
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