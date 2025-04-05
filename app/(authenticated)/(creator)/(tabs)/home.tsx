import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { screen } from '@/constants/Responsive';
import { testVideos } from '@/constants/Videos';
import { defaultStyles } from '@/constants/Styles';
import { applyFont } from '@/constants/Fonts';
import VideoWrapper from '@/components/VideoWrapper';


const bigBuckBunnySource: VideoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const elephantsDreamSource: VideoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

const sintelSource: VideoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4';

const localSourceOne: VideoSource = testVideos[0]
const localSourceTwo: VideoSource = testVideos[1]
const localSourceThree: VideoSource = testVideos[2]
const localSourceFour: VideoSource = testVideos[3]

const videos = [
    { id: '1', source: bigBuckBunnySource, metadata: { orientation: 'landscape' } },
    { id: '2', source: localSourceFour, metadata: { orientation: 'portrait' } },
    { id: '3', source: elephantsDreamSource, metadata: { orientation: 'landscape' } },
    { id: '4', source: localSourceTwo, metadata: { orientation: 'portrait' } },
    { id: '5', source: sintelSource, metadata: { orientation: 'landscape' } },
    { id: '6', source: localSourceThree, metadata: { orientation: 'portrait' } },

    { id: '7', source: localSourceOne, metadata: { orientation: 'portrait' } },

]

const { height } = Dimensions.get('window');

const Home = () => {
    const bottomHeight = useBottomTabBarHeight();
    const screenHeight = Platform.OS === 'android' ? height - bottomHeight : height - bottomHeight;


    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                initialNumToRender={1}
                snapToInterval={
                    screenHeight
                }
                data={videos}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                }}
                snapToAlignment='start'
                decelerationRate='fast'
                renderItem={({ item, index }) => (
                    <VideoWrapper item={item} index={index} currentIndex={currentIndex} />
                )} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    liveContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    followingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
