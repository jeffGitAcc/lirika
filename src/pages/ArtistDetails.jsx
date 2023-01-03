import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DetailsHeader, Error, Loader, SimilarArtist } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFething: isFethingArtistDetails, error } = useGetArtistDetailsQuery({ artistId });

  if (isFethingArtistDetails) return <Loader title="Searching Artist details" />;
  if (error) return <Error />;
  return (
    <div className="">

      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
      <SimilarArtist
        data={artistData}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />

    </div>

  );
};
export default ArtistDetails;
