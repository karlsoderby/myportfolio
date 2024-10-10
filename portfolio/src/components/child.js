import { Link } from "react-router-dom"

export const Child = ({title, description, link, width="w-[250px]", image }) => {
    return(
        <Link to={link} className={`${width}`}>
            
            <h3>{title}</h3>
            {image && <img src={image} alt={title} className="mb-4 rounded-lg" />}
            <p>{description}</p>
        </Link>
    )
}