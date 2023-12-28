import { useParams } from 'react-router-dom'

const EditCardPage = () => {
    let { idCardExample } = useParams()
    return (
        <h1>edit card {idCardExample}</h1>
    )
};

export default EditCardPage