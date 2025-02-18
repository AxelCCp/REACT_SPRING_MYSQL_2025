import { CardsPlacesGallery } from "../components/CardsPlacesGallery"

export const CardsPlacesPage = () => {

    /*

    const {
        getImages,
        images
    } = useContext(ImagesContext)

    useEffect(() => {
        getImages();
    }, []);

    */

    return (

        <>
        
            {
             //   images.length === 0 ? <div className="alert alert-warning">For now the image gallery is not available!</div> : <ImagesGallery/>
            }

            <CardsPlacesGallery/>

        </>

    )

}