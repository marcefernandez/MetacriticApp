import { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';

import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((games) => {
        setGames(games);
        });
    }, []);

    return (
        <View
            className="bg-violet-700">
            {games.length === 0 ? (
                <ActivityIndicator size={ "large"} />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => (
                    <AnimatedGameCard game={ item } index={ index } />
                    )}
                />
            )}
        </View>
    );
}