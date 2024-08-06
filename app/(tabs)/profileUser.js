import { UserIcon } from "../../components/Icons";
import { styled } from 'nativewind';
import { Screen } from "../../components/Screen";
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { Link } from "expo-router";

const StyledPressable = styled(Pressable);

export default function ProfileUser() {
    return (
        <Screen>
            <ScrollView>
                <Link asChild href="/">
                    <StyledPressable className={`active:opacity-40`}>
                        <UserIcon />
                    </StyledPressable>
                </Link>

                <Text className="text-white font-bold mb-8 text-2xl">
                    Perfil de usuario
                </Text>

                <View className="bg-violet-950 rounded-lg p-6 mb-6">
                    <View className="flex-row items-center mb-4">
                        <Image
                            source={{ uri: 'https://via.placeholder.com/150' }}
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <View>
                            <Text className="text-white font-bold text-xl">John Doe</Text>
                            <Text className="text-gray-400">johndoe@example.com</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-white font-bold text-xl">42</Text>
                            <Text className="text-gray-400">Publicaciones</Text>
                        </View>
                        <View>
                            <Text className="text-white font-bold text-xl">1.5K</Text>
                            <Text className="text-gray-400">Seguidores</Text>
                        </View>
                        <View>
                            <Text className="text-white font-bold text-xl">250</Text>
                            <Text className="text-gray-400">Siguiendo</Text>
                        </View>
                    </View>
                </View>

                <View className="bg-violet-950 rounded-lg p-6 mb-6">
                    <Text className="text-white font-bold mb-4 text-xl">Acerca de mí</Text>
                    <Text className="text-gray-400">
                        Soy un usuario apasionado por la tecnología y las redes sociales. Me gusta compartir
                        mis experiencias y conocer gente nueva.
                    </Text>
                </View>

                <View className="bg-violet-950 rounded-lg p-6 mb-6">
                    <Text className="text-white font-bold mb-4 text-xl">Configuración</Text>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-gray-400">Notificaciones</Text>
                        <Pressable className="bg-green-500 rounded-full px-4 py-2">
                            <Text className="text-white font-bold">Activar</Text>
                        </Pressable>
                    </View>
                    <View className="flex-row justify-between items-center mt-4">
                        <Text className="text-gray-400">Seguridad</Text>
                        <Pressable className="bg-yellow-500 rounded-full px-4 py-2">
                            <Text className="text-white font-bold">Editar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    )
}