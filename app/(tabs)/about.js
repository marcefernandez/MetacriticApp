import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../../components/Icons";

import { styled } from 'nativewind';
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
    return (
        <Screen>
            <ScrollView>
                <Link asChild href="/">
                    <StyledPressable className={`active:opacity-40`}>
                        <HomeIcon />
                    </StyledPressable>
                </Link>

                <Text className="text-white font-bold mb-8 text-2xl">
                    Sobre el proyecto
                </Text>

                <View className="bg-gray-800 rounded-lg p-6 mb-6">
                    <Text className="text-white font-bold mb-4 text-xl">
                        Sobre la API de Metacritic
                    </Text>
                    <Text className="text-gray-400 mb-4">
                        La API de Metacritic es una herramienta que proporciona acceso a datos sobre películas, juegos, música y programas de TV. Ofrece información detallada como puntuaciones, reseñas y detalles de los lanzamientos.
                    </Text>
                    <Text className="text-gray-400 mb-4">
                        En este proyecto, utilizamos la API de Metacritic para desarrollar una aplicación que permite a los usuarios buscar y descubrir información sobre sus contenidos favoritos.
                    </Text>
                    <Text className="text-gray-400 mb-4">
                        Para acceder a la API, es necesario contar con una clave de autenticación. Una vez obtenida la clave, se pueden realizar consultas a la API y obtener los datos necesarios para alimentar nuestra aplicación.
                    </Text>
                </View>

                <View className="bg-gray-800 rounded-lg p-6 mb-6">
                    <Text className="text-white font-bold mb-4 text-xl">
                        Características de la aplicación
                    </Text>
                    <Text className="text-gray-400 mb-4">
                        Nuestra aplicación permite a los usuarios:
                    </Text>
                    <View className="ml-4">
                        <Text className="text-gray-400 mb-2">- Buscar contenidos por título, género o palabras clave</Text>
                        <Text className="text-gray-400 mb-2">- Ver detalles de películas, juegos, música y programas de TV</Text>
                        <Text className="text-gray-400 mb-2">- Acceder a las puntuaciones y reseñas de Metacritic</Text>
                        <Text className="text-gray-400 mb-2">- Guardar sus contenidos favoritos en una lista personalizada</Text>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    )
}