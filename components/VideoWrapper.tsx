import { defaultStyles } from "@/constants/Styles";
import { applyFont } from "@/constants/Fonts";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { screen } from "@/constants/Responsive";
const { width, height } = Dimensions.get('window');



const VideoWrapper = ({ item, index, currentIndex }: { item: any, index: number, currentIndex: number }) => {
    const bottomHeight = useBottomTabBarHeight();
    const screenHeight = Platform.OS === 'android' ? height - bottomHeight : height - bottomHeight;
    const [liked, setLiked] = useState(false);
    const isActive = index === currentIndex;

    const player = useVideoPlayer(item.source, (player) => {
        if (isActive) {
            player.play();
        }
    });
    useEffect(() => {
        if (isActive) {
            player.play();
        } else {
            player.pause();
        }
    }, [isActive, player]);

    return (
        <View style={[styles.videoWrapperContainer, {
            height: screenHeight,
        }]}>
            <VideoView
                player={player}
                allowsFullscreen
                allowsPictureInPicture={false}
                nativeControls={false}
                style={[StyleSheet.absoluteFill]}
                contentFit={item.metadata.orientation === 'landscape' ? 'contain' : 'cover'}
            />

            <View style={styles.contentContainer}>
                <View style={styles.leftContent}>
                    <View style={styles.spacer} />
                    <View style={styles.bottomInfo}>
                        <Text style={[defaultStyles.header, styles.username]}>Aziz Adam</Text>
                        <Text style={[defaultStyles.text, styles.description]}>How to get a seat in London Underground 😂😂😂</Text>
                    </View>
                </View>

                <View style={styles.rightContent}>
                    <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.actionButton}>
                        <Ionicons name={liked ? "heart" : "heart"} size={30} color={liked ? "red" : "white"} />
                        <Text style={applyFont(styles.actionText)}>80.3K</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="chatbubble" size={30} color="white" />
                        <Text style={applyFont(styles.actionText)}>2,436</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="paper-plane" size={30} color="white" />
                        <Text style={applyFont(styles.actionText)}>2,670</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default VideoWrapper;

const styles = StyleSheet.create({

    videoWrapperContainer: {
        width,
        position: 'relative',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: Platform.OS === 'android' ? screen.hp(6) : screen.hp(0),
    },
    leftContent: {
        flex: 0.85,
        justifyContent: 'space-between',
    },
    spacer: {
        flex: 1,
    },
    bottomInfo: {
        paddingLeft: screen.wp(3),
        paddingBottom: screen.hp(5),
        width: '100%',
    },
    username: {
        color: 'white',
        fontSize: screen.wp(4),
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    description: {
        color: 'white',
        marginBottom: screen.hp(1),
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    rightContent: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: screen.hp(10),
    },

    actionButton: {
        alignItems: 'center',
        marginVertical: screen.hp(1),
    },
    actionText: {
        color: 'white',
        fontSize: screen.wp(3),
        marginTop: screen.hp(0.5),
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
})
