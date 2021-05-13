import { useParams} from 'react-router-dom';

const ProfilePage = () => {
    const { username } = useParams();
    return (
        <div>
            Profile: {username}
        </div>
    )
}

export default ProfilePage
