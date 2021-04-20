import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => (
    <div className={styles.wrap}>
        <div className={styles.contentleft}>
            <a href="#"><i className="fas fa-home"></i><span>홈</span></a>
            <a href="#"><i className="fas fa-compass"></i><span>탐색</span></a>
            <a href="#"><i className="fab fa-youtube-square"></i><span>구독</span></a>
            <a href="#"><i className="fas fa-box-open"></i><span>보관함</span></a>
        </div>
        <ul className={styles.videos}>
            {props.videos.map(video => <VideoItem key={video.id} video={video} />)}
            
        </ul>
    </div>
);

export default VideoList;