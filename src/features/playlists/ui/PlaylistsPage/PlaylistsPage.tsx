import { useFetchPlaylistsQuery } from "@/features/playlists/api/playlistsApi.ts";

export const PlaylistsPage = () => {
    const { data } = useFetchPlaylistsQuery()

    return (
        <div>
            <h1>Playlists page</h1>
            <div>
                {data?.data.map((playlist) => (
                    <div key={playlist.id}>
                        <div>title: {playlist.attributes.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}