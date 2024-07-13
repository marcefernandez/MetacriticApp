import { useState, useEffect } from 'react';
import { FlatList, View, ScrollView, ActivityIndicator } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';

export function Main({game}) {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((games) => {
        setGames(games);
        });
    }, []);

    return (
        <View style={{ 
            paddingTop: insets.top, 
            paddingBottom: insets.bottom, 
        }}>
            <View style={{ marginBottom:20, alignItems:'center' }}>
                <Logo />
            </View>
            {games.length === 0 ? (
                <ActivityIndicator size={ "large"} />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => <AnimatedGameCard game={ item } index={ index } />}
                />
            )}
        </View>
    );
}