import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookDetails = () => {

    const {id} = useParams();
    return (  
        <div className="blog-datails">
            <h1>Opis knjige id= {id}</h1>
        </div>
    );
}
 
export default BookDetails;