
import ReactPlayer from "react-player";

import video from '../assets/videos/17564185-uhd_3840_2160_30fps.mp4';

export const VideosGallery = () => {

    return (


        <>
        
        <div className="bg-light rounded my-2">
            <h3 className="text-primary lh-base">Video stored in local or server folder</h3>
        </div>

        <div className="mt-2 contenedor-video">

            <ReactPlayer url={video} controls  className="react-player" width={'100%'} height={'100%'}/>
        
        </div>

        <br /><br /><br />

        <div className="bg-light rounded my-2">
            <h3 className="text-primary lh-base">Youtube video</h3>
        </div>

        <div className="mt-2 contenedor-video">

        <ReactPlayer url={'https://www.youtube.com/watch?v=Dy6MpsDPKts&list=RDgsQIOgkZt68&index=5&ab_channel=WithinTemptationVEVO'} controls  className="react-player" width={'100%'} height={'100%'} />
        
        </div>


        </>
     )



}