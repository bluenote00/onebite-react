import { useParams } from "react-router-dom"

const Edit = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
           {params.id} Edit
        </div>
    );
};

export default Edit;
