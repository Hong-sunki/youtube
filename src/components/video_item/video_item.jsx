import React from 'react';
import styles from './video_item.module.css';



const VideoItem = ({ video: { snippet, statistics } }) => {
    // const count = () => {
    //     let count = statistics.viewCount
    //     let num = '';
    //     if ( count < 1000 ) {
    //         return count
    //     } else if (count < 10000) {
    //         num = count / 1000;
    //         count = `${num.toFixed(1)}천`;
    //         return count
    //     } else if (count < 100000) {
    //         num = count / 10000;
    //         count = `${num.toFixed(1)}만`;
    //         return count
    //     } else if (count < 100000000) {
    //         count = `${Math.floor(count / 10000)}만`;
    //         return count
    //     } else {
    //         count = `${Math.floor(count / 100000000)}억`;
    //         return count
    //     }
        
    // }
    // count()
    
    
    return (
    <li className={styles.container}>
        <div className={styles.video}>
            <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p> 
                <p className={styles.channel}>{snippet.channelTitle}</p> 
                {/* <p>{{Count}}회</p> */}
            </div>
        </div>
        
    </li>
    );
};

export default VideoItem;


// import React from 'react';
// import styles from './video_item.module.css';

// const VideoItem = ({ video: { snippet } }) => (
//     <li className={styles.video}>
       
//             <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
//             <div className={styles.metadata}>
//                 <p className={styles.title}>{snippet.title}</p>
//                 <p className={styles.channel}>{snippet.channelTitle}</p>
//             </div>
        
//     </li>
// );

// export default VideoItem;